import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Navigation } from '../Navigation';
import { AsideUserInfo } from '../AsideUserInfo';
import { Button } from '../Button';

import styles from './AsideBar.module.css';

export interface AsideBarProps extends CommonProps {}

export const AsideBar: React.FC<AsideBarProps> = React.memo((props) => {
	const { className } = props;
	return (
		<aside className={classNames(styles.wrapper, className)}>
			<AsideUserInfo className={styles['user-info']} />
			<Navigation />
			<Button className={styles.button} buttonType='mono' onClick={console.log}>
				Logout
			</Button>
		</aside>
	);
});
