import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface PlusIconProps extends CommonProps {}

export const PlusIcon: React.FC<PlusIconProps> = React.memo(function PlusIcon(
	props
) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 24 24'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M19 11h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2'
        strokeWidth={0}
			/>
		</SvgIcon>
	);
});
