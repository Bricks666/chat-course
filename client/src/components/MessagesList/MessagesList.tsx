import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { useQuery } from '@/packages/Query';
import { getMessagesApi } from '@/api/messages';
import { getAuthApi } from '@/api/auth';
import { Message } from '../Message/Message';

import styles from './MessagesList.module.css';
import useScrollTo from '@/hooks/useScrollTo';

export interface MessagesListProps extends CommonProps {
	readonly chatId: number;
}

export const MessagesList: React.FC<MessagesListProps> = React.memo((props) => {
	const { className, chatId } = props;
	const [ref, setRef] = React.useState<HTMLElement | null>(null);
	const { data = [] } = useQuery(['messages', chatId], () =>
		getMessagesApi(chatId)
	);
	const { data: auth } = useQuery('auth', getAuthApi);
  useScrollTo({
    target: ref,
    position: 'bottom'
  })
	return (
		<ul className={classNames(styles.list, className)} ref={setRef}>
			{data.map((message) => {
				const isAuthUser = auth?.id === message.senderId;
				return (
					<Message
						className={classNames(styles.message, {
							[styles['auth-message']]: isAuthUser,
						})}
						isAuthUser={isAuthUser}
						{...message}
						key={message.id}
					/>
				);
			})}
		</ul>
	);
});
