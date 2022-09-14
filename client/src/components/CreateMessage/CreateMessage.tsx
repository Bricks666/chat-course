import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { Button } from '../Button';
import { Input } from '../Input';

import styles from './CreateMessage.module.css';

export interface CreateMessageProps extends CommonProps {
	readonly chatId: number;
}

export const CreateMessage: React.FC<CreateMessageProps> = React.memo(
	(props) => {
		const { className } = props;
		return (
			<section className={classNames(styles.wrapper, className)}>
				<Button buttonType='gradient' />
				<form className={styles.form}>
					<Input className={styles.input} placeholder='Type a message here' />
					<Button buttonType='gradient' />
					<Button buttonType='gradient' />
				</form>
			</section>
		);
	}
);
