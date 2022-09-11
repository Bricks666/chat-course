import * as React from 'react';
import { queryContext } from './context';
import { QueryInformation } from './types';

export type Key = string | Array<string | number>;

export type Fetcher<R> = () => Promise<R>;

const defaultValue: QueryInformation<any> = {
	isError: false,
	isLoading: false,
	isSuccess: false,
	data: undefined,
};

const useQuery = <R>(
	queryKey: Key,
	queryFn: Fetcher<R>
): QueryInformation<R> => {
	const context = React.useContext(queryContext);
	if (!context) {
		throw new Error('useQuery must be used only inside queryContext');
	}

	const key = JSON.stringify(queryKey);

	const { setValue, value } = context;
	const { [key]: info } = value;

	React.useEffect(() => {
		const request = async () => {
			let data: R | undefined;
			let isError: boolean = false;
			let isSuccess: boolean = false;
			try {
				setValue(key, {
					isLoading: true,
				});

				data = await queryFn();
				isSuccess = true;
			} catch {
				isError = true;
			} finally {
				setValue(key, {
					data,
					isError,
					isSuccess,
					isLoading: false,
				});
			}
		};
		request();
	}, [key, queryFn, setValue]);

	React.useEffect(() => {
		if (!info) {
			setValue(key, defaultValue);
		}
	}, [key]);

	return info || defaultValue;
};

export default useQuery;
