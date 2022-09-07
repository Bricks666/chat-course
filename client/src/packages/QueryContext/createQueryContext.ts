import { Context, createContext } from 'react';

export interface QueryContextValue<T> {
	readonly data?: T;
	readonly isLoading: boolean;
	readonly isSuccess: boolean;
	readonly isError: boolean;
}

export const createQueryContext = <T>(
	defaultValue?: T
): Context<QueryContextValue<T>> => {
	return createContext<QueryContextValue<T>>(defaultValue as any);
};
