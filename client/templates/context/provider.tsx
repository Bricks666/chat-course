import * as React from 'react';
import { TemplateName } from './context';
import { Type } from './types';
import { QueryContextValue_LEGACY } from '@/packages/QueryContext';

export interface TemplateNameProviderProps {}

export const TemplateNameProvider: React.FC<
	React.PropsWithChildren<TemplateNameProviderProps>
> = (props) => {
	const { children } = props;

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
	const [isError, setIsError] = React.useState<boolean>(false);
	const [data, setData] = React.useState<Type[]>([]);

	const fetch = React.useCallback(async () => {
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
	}, []);

	const value: QueryContextValue_LEGACY<Type[], typeof fetch> = {
		isLoading,
		isSuccess,
		isError,
		data,
    fetch
	};
	return (
		<TemplateName.Provider value={value}>{children}</TemplateName.Provider>
	);
};