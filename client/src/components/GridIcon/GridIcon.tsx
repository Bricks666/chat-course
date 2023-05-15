import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface GridIconProps extends CommonProps {}

export const GridIcon: React.FC<GridIconProps> = React.memo(function GridIcon(
	props
) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 24 24'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
        strokeWidth='1'
				d='M15 19v-4h4l.001 4H15Zm4-6h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2ZM5 19v-4h4l.001 4H5Zm4-6H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2Zm6-4V5h4l.001 4H15Zm4-6h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM5 9V5h4l.001 4H5Zm4-6H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2Z'
			/>
		</SvgIcon>
	);
});
