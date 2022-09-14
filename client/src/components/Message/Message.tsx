import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Message as MessageType } from '@/models/message';
import { Avatar } from '../Avatar';
import { Text } from '../Text';

import styles from './Message.module.css';

export interface MessageProps extends CommonProps, MessageType {
	readonly isAuthUser: boolean;
}

export const Message: React.FC<MessageProps> = React.memo((props) => {
	const { className, content, isAuthUser, sendedAt, senderName, senderPhoto } =
		props;
	return (
		<article
			className={classNames(
				styles.wrapper,
				{ [styles['wrapper-sender']]: isAuthUser },
				className
			)}
		>
			{!isAuthUser && (
				<Avatar src={senderPhoto} alt={senderName} size='small' />
			)}
			<Text className={styles.content}>{content}</Text>
			<time className={styles.time} dateTime={sendedAt}>
				{sendedAt}
			</time>
		</article>
	);
});
