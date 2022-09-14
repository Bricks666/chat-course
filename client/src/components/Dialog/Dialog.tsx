import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { DialogHeader } from '../DialogHeader';
import { MessagesList } from '../MessagesList';
import { CreateMessage } from '../CreateMessage';

import styles from './Dialog.module.css';

export interface DialogProps extends CommonProps {}

export const Dialog: React.FC<DialogProps> = React.memo((props) => {
	const { className } = props;
	return (
		<section className={classNames(styles.wrapper, className)}>
			<DialogHeader />
			<MessagesList />
			<CreateMessage />
		</section>
	);
});
