import * as React from 'react';
import { AsideBar } from '@/components/AsideBar';
import { CommonProps } from '@/interfaces/common';

import styles from './MainLayout.module.css';

interface MainLayoutProps extends CommonProps {}

const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = (
	props
) => {
	const { children, className } = props;
	return (
		<div className={styles.wrapper}>
			<AsideBar />
			<main className={className}>{children}</main>
		</div>
	);
};

export default MainLayout;
