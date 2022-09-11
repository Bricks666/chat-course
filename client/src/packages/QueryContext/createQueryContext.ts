import { Context, createContext } from 'react';
import { AnyFunction } from './types';

export interface QueryContextValue<T, F extends AnyFunction> {
	readonly data?: T;
	readonly isLoading: boolean;
	readonly isSuccess: boolean;
	readonly isError: boolean;
	readonly fetch: F;
}

export const createQueryContext = <T, F extends AnyFunction>(
	defaultValue?: T
): Context<QueryContextValue<T, F>> => {
	return createContext<QueryContextValue<T, F>>(defaultValue as any);
};
