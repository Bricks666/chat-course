import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Variant } from './types';

import styles from './Text.module.css';

export interface TextProps extends CommonProps {
	readonly tag?: React.ComponentType<CommonProps> | keyof React.ReactHTML;
	readonly variant?: Variant;
}

export const Text: React.FC<React.PropsWithChildren<TextProps>> = (props) => {
	const { children, className, variant = 'p', tag = variant } = props;
	return React.createElement(
		tag,
		{
			className: classNames(styles.text, styles[variant], className),
		},
		children
	);
};
