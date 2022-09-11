import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './SearchChat.module.css';

export interface SearchChatProps extends CommonProps {}

export const SearchChat: React.FC<SearchChatProps> = React.memo((props) => {
	const { className } = props;
	return null;
});
