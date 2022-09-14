import * as React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { Chat as ChatModel } from '@/models/chat';
import { Text } from '../Text';
import { UserChatInfo } from '../UserChatInfo';

import styles from './Chat.module.css';

export interface ChatProps extends CommonProps, ChatModel {}

export const Chat: React.FC<ChatProps> = React.memo((props) => {
	const {
		className,
		companionName,
		id,
		lastActivityTime,
		lastMessage,
		companionPhoto,
		newMessageCount,
	} = props;
	return (
		<NavLink
			className={({ isActive }) =>
				classNames(styles.link, { [styles['link-active']]: isActive })
			}
			to={`${id}`}
		>
			<article className={classNames(styles.wrapper, className)}>
				<div className={styles.info}>
					<UserChatInfo userName={companionName} userPhoto={companionPhoto} />
					<Text tag='span'>
						<time dateTime={lastActivityTime}>{lastActivityTime}</time>
					</Text>
				</div>
				<div className={styles['message-wrapper']}>
					<Text className={styles.message} variant='p'>
						{lastMessage}
					</Text>
					{!!newMessageCount && (
						<span className={styles['new-message-count']}>
							{newMessageCount}
						</span>
					)}
				</div>
			</article>
		</NavLink>
	);
});
