import { ChangeEventHandler, useCallback, useState } from 'react';

export interface UseFieldResult {
	readonly onChange: ChangeEventHandler<HTMLInputElement>;
	readonly value: string;
	readonly reset: VoidFunction;
}

const useField = (defaultValue: string = ''): UseFieldResult => {
	const [value, setValue] = useState<string>(defaultValue || '');

	const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((evt) => {
		setValue(evt.target.value);
	}, []);

	const reset = useCallback(() => setValue(defaultValue), [defaultValue]);

	return {
		value,
		onChange,
		reset,
	};
};

export default useField;
