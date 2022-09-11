import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './ChatsList.module.css';

export interface ChatsListProps extends CommonProps {}

export const ChatsList: React.FC<ChatsListProps> = React.memo((props) => {
	const { className } = props;
	return null;
});
