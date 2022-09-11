import * as React from 'react';
import { UsersContext } from './context';
import { User } from './types';
import { QueryContextValue_LEGACY } from '@/packages/QueryContext';

export interface UsersContextProviderProps {}

export const UsersContextProvider: React.FC<
	React.PropsWithChildren<UsersContextProviderProps>
> = (props) => {
	const { children } = props;

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
	const [isError, setIsError] = React.useState<boolean>(false);
	const [data, setData] = React.useState<User[]>([]);

	React.useEffect(() => {
		const request = async () => {
			setIsLoading(true);
			try {
				const data = await [];
				setData(data);
				setIsSuccess(true);
			} catch {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		request();

		return () => {
			setIsSuccess(false);
			setIsLoading(false);
			setIsError(false);
			setData([]);
		};
	}, []);

	const value: QueryContextValue_LEGACY<User[]> = {
		isLoading,
		isSuccess,
		isError,
		data,
	};
	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};
