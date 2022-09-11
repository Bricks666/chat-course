import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Size } from './types';

import styles from './Avatar.module.css';

export interface AvatarProps
	extends CommonProps,
		React.ImgHTMLAttributes<HTMLImageElement> {
	readonly size?: Size;
}

export const Avatar: React.FC<AvatarProps> = React.memo((props) => {
	const { className, size = 'medium', ...rest } = props;
	return (
		<img
			className={classNames(styles.image, styles[size], className)}
			{...rest}
		/>
	);
});
