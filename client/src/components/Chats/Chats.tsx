import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Text } from '../Text';
import { Button } from '../Button';
import { ChatsList } from '../ChatsList';
import { SearchChat } from '../SearchChat';
import { PlusIcon } from '../PlusIcon';

import styles from './Chats.module.css';

export interface ChatsProps extends CommonProps {}

export const Chats: React.FC<ChatsProps> = React.memo((props) => {
	const { className } = props;
	return (
		<section className={classNames(styles.wrapper, className)}>
			<Text variant='h1' tag='h2'>
				Chats
			</Text>
			<Button className={styles.button} buttonType='gradient'>
				<PlusIcon />
				Create new Chat
			</Button>
			<SearchChat className={styles.search} />
			<ChatsList className={styles.list} />
		</section>
	);
});
