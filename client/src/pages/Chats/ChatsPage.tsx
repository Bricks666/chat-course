import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Chats } from '@/components/Chats';
import { Dialog } from '@/components/Dialog';

import styles from './ChatsPage.module.css';

const ChatsPage: React.FC = () => {
	return (
		<MainLayout className={styles.wrapper}>
			<Chats className={styles.chats} />
			<Routes>
				<Route path=':id' element={<Dialog className={styles.dialog} />} />
			</Routes>
		</MainLayout>
	);
};

export default ChatsPage;
