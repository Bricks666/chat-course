import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { useQuery } from '@/packages/QueryContext';
import { getAuthApi } from '@/api/auth';
import { Text } from '../Text';
import { Avatar } from '../Avatar';

import styles from './AsideUserInfo.module.css';

export interface AsideUserInfoProps extends CommonProps {}

export const AsideUserInfo: React.FC<AsideUserInfoProps> = React.memo(
	(props) => {
		const { className } = props;
		const { data } = useQuery('/auth', getAuthApi);
		return (
			<section className={classNames(styles.wrapper, className)}>
				<Avatar
					className={styles.image}
					size='large'
					src={data?.photo}
					alt={`${data?.name} avatar`}
				/>
				<Text className={styles.name} variant='h3' tag='p'>
					{data?.name}
				</Text>
			</section>
		);
	}
);
