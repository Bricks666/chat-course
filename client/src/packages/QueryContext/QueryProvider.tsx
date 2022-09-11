import * as React from 'react';
import {
	queryContext,
	QueryContextValue,
	QueryValue,
	SetQueryValue,
} from './context';

const QueryProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
	const { children } = props;

	const [queryValue, setQueryValue] = React.useState<QueryValue>({});
	const setValue = React.useCallback<SetQueryValue>((key, info) => {
		setQueryValue((value) => ({
			...value,
			[key]: {
				...value[key],
				...info,
			},
		}));
	}, []);

	const value = React.useMemo<QueryContextValue>(
		() => ({
			setValue,
			value: queryValue,
		}),
		[queryValue, setValue]
	);
	return (
		<queryContext.Provider value={value}>{children}</queryContext.Provider>
	);
};

export default QueryProvider;
