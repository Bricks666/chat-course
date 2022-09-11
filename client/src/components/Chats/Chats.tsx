import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Text } from '../Text';
import { Button } from '../Button';
import { ChatsList } from '../ChatsList';
import { SearchChat } from '../SearchChat';

import styles from './Chats.module.css';

export interface ChatsProps extends CommonProps {}

export const Chats: React.FC<ChatsProps> = React.memo((props) => {
	const { className } = props;
	return (
		<section className={className}>
			<Text variant='h1' tag='h2'>
				Chats
			</Text>
			<Button buttonType='gradient'>Create new Chat</Button>
			<SearchChat />
			<ChatsList />
		</section>
	);
});
