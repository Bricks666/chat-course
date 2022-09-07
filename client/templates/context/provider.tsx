import * as React from 'react';
import { TemplateName } from './context';
import { Type } from './types';
import { QueryContextValue } from '@/packages/QueryContext';

export interface TemplateNameProviderProps {}

export const TemplateNameProvider: React.FC<
	React.PropsWithChildren<TemplateNameProviderProps>
> = (props) => {
	const { children } = props;

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
	const [isError, setIsError] = React.useState<boolean>(false);
	const [data, setData] = React.useState<Type[]>([]);

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

	const value: QueryContextValue<Type[]> = {
		isLoading,
		isSuccess,
		isError,
		data,
	};
	return (
		<TemplateName.Provider value={value}>{children}</TemplateName.Provider>
	);
};
