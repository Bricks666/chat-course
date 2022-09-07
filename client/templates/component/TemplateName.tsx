import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';

import styles from './TemplateName.module.css';

export interface TemplateNameProps extends CommonProps {}

export const TemplateName: React.FC<TemplateNameProps> = React.memo((props) => {
	const { className } = props;
	return null;
});
