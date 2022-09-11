import * as React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { Chat as ChatModel } from '@/models/chat';
import { Avatar } from '../Avatar';
import { Text } from '../Text';

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
	} = props;
	return (
		<article className={classNames(styles.wrapper, className)}>
			<NavLink
				className={({ isActive }) =>
					classNames(styles.link, { [styles['link-active']]: isActive })
				}
				to={`${id}`}
			>
				<div className={styles.info}>
					<Avatar
						className={styles.image}
						src={companionPhoto}
						alt={companionName}
					/>
					<Text variant='h3'>{companionName}</Text>
					<Text tag='span'>
						<time dateTime={lastActivityTime}>{lastActivityTime}</time>
					</Text>
				</div>
				<div>
					<Text variant='p'>{lastMessage}</Text>
				</div>
			</NavLink>
		</article>
	);
});
