import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { ButtonType, StyleType, Tag } from './types';

import styles from './BaseButton.module.css';

export interface BaseButtonProps extends CommonProps {
	readonly buttonType: StyleType;
	readonly tag?: Tag;
	readonly href?: string;
	readonly onClick?: VoidFunction;
	readonly type?: ButtonType;
}

export const BaseButton: React.FC<React.PropsWithChildren<BaseButtonProps>> = (
	props
) => {
	const {
		className,
		buttonType,
		href,
		onClick,
		children,
		tag = 'button',
		type = 'button',
	} = props;
	const classes = classNames(styles.button, styles[buttonType], className);
	return React.createElement(
		tag,
		{
			className: classes,
			to: href,
			onClick,
			href,
			type,
		} as any,
		children
	);
};
