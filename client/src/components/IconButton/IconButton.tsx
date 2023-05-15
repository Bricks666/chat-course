import * as React from 'react';
import classNames from 'classnames';
import { CommonProps, Size } from '@/interfaces/common';
import { BaseButton, BaseButtonProps } from '../BaseButton';

import styles from './IconButton.module.css';

export interface IconButtonProps extends CommonProps, BaseButtonProps {
	readonly size?: Size;
}

export const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = (
	props
) => {
	const { className, size = 'medium', ...rest } = props;
	const classes = classNames(styles.button, styles[size], className);
	return <BaseButton className={classes} {...rest} />;
};
