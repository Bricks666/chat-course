import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './SvgIcon.module.css';

export interface SvgIconProps
	extends CommonProps,
		React.SVGAttributes<SVGElement> {}

export const SvgIcon: React.FC<SvgIconProps> = (props) => {
	const { className, children, ...rest } = props;
	const classes = classNames(styles.svg, className);
	return (
		<svg className={classes} {...rest}>
			{children}
		</svg>
	);
};
