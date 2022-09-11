import * as React from 'react';
import { QueryInformation } from './types';

export type QueryValue = Record<string, QueryInformation<any>>;
export type SetQueryValue = (
	key: string,
	value: Partial<QueryInformation<any>>
) => void;

export interface QueryContextValue {
	readonly setValue: SetQueryValue;
	readonly value: QueryValue;
}

export const queryContext = React.createContext<QueryContextValue>(
	undefined as any
);
