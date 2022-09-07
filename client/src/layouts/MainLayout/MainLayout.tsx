import * as React from 'react';
import { AsideBar } from '@/components/AsideBar';

import styles from './MainLayout.module.css';

interface MainLayoutProps {}

const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { children } = props;
	return (
		<div className={styles.wrapper}>
			<AsideBar />
			<main>{children}</main>
		</div>
	);
};

export default MainLayout;
