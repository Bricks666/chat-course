export type AnyFunction = (...args: any[]) => Promise<unknown> | unknown;

export interface QueryInformation<Data> {
	readonly isLoading: boolean;
	readonly isSuccess: boolean;
	readonly isError: boolean;
	readonly data?: Data;
}
