import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { navigation } from './data';
import { NavigationItem } from '../NavigationItem';

import styles from './Navigation.module.css';

export interface NavigationProps extends CommonProps {}

export const Navigation: React.FC<NavigationProps> = React.memo((props) => {
	const { className } = props;
	return (
		<nav className={classNames(styles.wrapper, className)}>
			<ul className={styles.list}>
				{navigation.map((item) => (
					<NavigationItem {...item} key={item.href} />
				))}
			</ul>
		</nav>
	);
});
