import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './Input.module.css';

export interface InputProps
	extends CommonProps,
		React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = React.memo((props) => {
	const { className, ...rest } = props;
	return <input className={classNames(styles.input, className)} {...rest} />;
});
