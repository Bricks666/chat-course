import * as React from 'react';
import { AuthContext } from './context';
import { Auth } from './types';
import { QueryContextValue_LEGACY } from '@/packages/QueryContext';
import { getAuthApi } from '@/api';

export interface AuthContextProviderProps {}

export const AuthContextProvider: React.FC<
	React.PropsWithChildren<AuthContextProviderProps>
> = (props) => {
	const { children } = props;

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
	const [isError, setIsError] = React.useState<boolean>(false);
	const [data, setData] = React.useState<Auth>();

	const fetch = React.useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getAuthApi();
			setData(data);
			setIsSuccess(true);
		} catch {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const value: QueryContextValue_LEGACY<Auth, typeof fetch> = {
		isLoading,
		isSuccess,
		isError,
		data,
		fetch,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
