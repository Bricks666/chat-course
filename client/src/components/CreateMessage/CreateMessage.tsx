import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './CreateMessage.module.css';

export interface CreateMessageProps extends CommonProps {}

export const CreateMessage: React.FC<CreateMessageProps> = React.memo((props) => {
	const { className } = props;
	return null;
});
