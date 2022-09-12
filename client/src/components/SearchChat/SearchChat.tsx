import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import useField from '@/hooks/useField';
import { Input } from '../Input';

import styles from './SearchChat.module.css';

export interface SearchChatProps extends CommonProps {}

export const SearchChat: React.FC<SearchChatProps> = React.memo((props) => {
	const { className } = props;
	const { value, ...searchHandlers } = useField();
	const deferredValue = React.useDeferredValue(value);
	return (
		<Input
			className={classNames(styles.search, className)}
			type='search'
			placeholder='Search'
			value={deferredValue}
			{...searchHandlers}
		/>
	);
});
