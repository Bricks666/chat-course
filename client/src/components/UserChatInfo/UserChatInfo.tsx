import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './UserChatInfo.module.css';
import { Text } from '../Text';
import { Avatar } from '../Avatar';

export interface UserChatInfoProps extends CommonProps {
	readonly userName: string;
	readonly userPhoto?: string;
}

export const UserChatInfo: React.FC<UserChatInfoProps> = React.memo((props) => {
	const { className, userName, userPhoto } = props;
	return (
		<div className={classNames(styles.wrapper, className)}>
			<Avatar className={styles.image} src={userPhoto} alt={userName} />
			<Text variant='h3' className={styles.name}>
				{userName}
			</Text>
			<Text variant='p' tag='span' className={styles.action}>
				Incognito
			</Text>
		</div>
	);
});
