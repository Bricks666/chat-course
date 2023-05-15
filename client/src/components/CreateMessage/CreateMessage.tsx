import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { IconButton } from '../IconButton';
import { Input } from '../Input';
import { PlusIcon } from '../PlusIcon';

import styles from './CreateMessage.module.css';

export interface CreateMessageProps extends CommonProps {
	readonly chatId: number;
}

export const CreateMessage: React.FC<CreateMessageProps> = React.memo(
	(props) => {
		const { className } = props;
		return (
			<section className={classNames(styles.wrapper, className)}>
				<IconButton buttonType='gradient'>
					<PlusIcon />
				</IconButton>
				<form className={styles.form}>
					<Input className={styles.input} placeholder='Type a message here' />
					<IconButton buttonType='mono' />
					<IconButton buttonType='gradient' type='submit' />
				</form>
			</section>
		);
	}
);
