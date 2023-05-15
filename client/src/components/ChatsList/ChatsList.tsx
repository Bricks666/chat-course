import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { useQuery } from '@/packages/Query';
import { getChatsApi } from '@/api/chats';
import { Chat } from '../Chat';

import styles from './ChatsList.module.css';

export interface ChatsListProps extends CommonProps {}

export const ChatsList: React.FC<ChatsListProps> = React.memo((props) => {
	const { className } = props;
	const { data = [], isError, isLoading } = useQuery(['chats'], getChatsApi);

	if (isLoading) {
		return null;
	}

	if (isError) {
		return null;
	}

	return (
		<ul className={classNames(styles.list, className)}>
			{data.map((chat) => (
				<li className={styles.item} key={chat.id}>
					<Chat {...chat} />
				</li>
			))}
		</ul>
	);
});
