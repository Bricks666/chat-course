import { Chats } from '@/components/Chats';
import MainLayout from '@/layouts/MainLayout';
import * as React from 'react';

import styles from './ChatsPage.module.css';

const ChatsPage: React.FC = () => {
	return (
		<MainLayout className={styles.wrapper}>
			<Chats />
		</MainLayout>
	);
};

export default ChatsPage;
