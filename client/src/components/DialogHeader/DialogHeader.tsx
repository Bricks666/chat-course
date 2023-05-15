import * as React from 'react';
import classNames from 'classnames';
import { Navigate } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { useQuery } from '@/packages/Query';
import { getChatApi } from '@/api/chats';
import { UserChatInfo } from '../UserChatInfo';
import { Text } from '../Text';
import { IconButton } from '../IconButton';
import { AttachIcon } from '../AttachIcon';
import { MoreVerticalIcon } from '../MoreVerticalIcon';

import styles from './DialogHeader.module.css';

export interface DialogHeaderProps extends CommonProps {
	readonly chatId: number;
}

export const DialogHeader: React.FC<DialogHeaderProps> = React.memo((props) => {
	const { className, chatId } = props;
	const { data, isError, isLoading, isSuccess } = useQuery(
		['chat', chatId],
		() => getChatApi(chatId)
	);

	if (isError) {
		return <Navigate to='/chats' />;
	}

	if (isLoading || !isSuccess) {
		return <Text>Loading...</Text>;
	}

	return (
		<header className={classNames(styles.wrapper, className)}>
			<UserChatInfo
				className={styles.info}
				userName={data!.companionName}
				userPhoto={data!.companionPhoto}
			/>
			<div className={styles.buttons}>
				<IconButton buttonType='mono'>
					<AttachIcon />
				</IconButton>
				<IconButton buttonType='mono'>
					<MoreVerticalIcon />
				</IconButton>
			</div>
		</header>
	);
});
