import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Chats } from '@/components/Chats';
import MainLayout from '@/layouts/MainLayout';

import styles from './ChatsPage.module.css';

const ChatsPage: React.FC = () => {
	return (
		<MainLayout className={styles.wrapper}>
			<Chats className={styles.chats} />
			<Outlet />
		</MainLayout>
	);
};

export default ChatsPage;
