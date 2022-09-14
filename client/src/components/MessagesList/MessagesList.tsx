import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './MessagesList.module.css';

export interface MessagesListProps extends CommonProps {}

export const MessagesList: React.FC<MessagesListProps> = React.memo((props) => {
	const { className } = props;
	return null;
});
