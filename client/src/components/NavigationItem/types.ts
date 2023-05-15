import { CommonProps } from '@/interfaces/common';
import { ComponentType } from 'react';

export interface NavItem {
	readonly label: string;
	readonly href: string;
	readonly Icon: ComponentType<CommonProps>;
}
