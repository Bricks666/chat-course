import * as React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { Text } from '../Text';
import { NavItem } from './types';

import styles from './NavigationItem.module.css';

export interface NavigationItemProps extends CommonProps, NavItem {}

export const NavigationItem: React.FC<NavigationItemProps> = React.memo(
	(props) => {
		const { className, href, label } = props;
		return (
			<li className={className}>
				<Text variant='p' tag='span'>
					<NavLink
						className={({ isActive }) =>
							classNames(styles.link, { [styles['active-link']]: isActive })
						}
						to={href}
					>
						{label}
					</NavLink>
				</Text>
			</li>
		);
	}
);
