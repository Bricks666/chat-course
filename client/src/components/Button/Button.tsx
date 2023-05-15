import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { BaseButton, BaseButtonProps } from '../BaseButton';

import styles from './Button.module.css';

export interface ButtonProps extends CommonProps, BaseButtonProps {}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
	props
) => {
	const { className, ...rest } = props;
	const classes = classNames(styles.button, className);
	return <BaseButton className={classes} {...rest} />;
};
