import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import useGetParam from '@/hooks/useGetParam';
import { DialogHeader } from '../DialogHeader';
import { MessagesList } from '../MessagesList';
import { CreateMessage } from '../CreateMessage';

import styles from './Dialog.module.css';

export interface DialogProps extends CommonProps {}

export const Dialog: React.FC<DialogProps> = React.memo((props) => {
	const { className } = props;
	const chatId: number = Number(useGetParam('id'));

	if (!chatId) {
		return null;
	}
	return (
		<section className={classNames(styles.wrapper, className)}>
			<DialogHeader chatId={chatId} />
			<MessagesList chatId={chatId} />
			<CreateMessage chatId={chatId} />
		</section>
	);
});
