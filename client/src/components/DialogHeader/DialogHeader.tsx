import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Avatar } from '../Avatar';

import styles from './DialogHeader.module.css';
import { Text } from '../Text';

export interface DialogHeaderProps extends CommonProps {}

export const DialogHeader: React.FC<DialogHeaderProps> = React.memo((props) => {
	const { className } = props;
	return (
		<header>
			<Avatar />
      <Text></Text>
		</header>
	);
});
