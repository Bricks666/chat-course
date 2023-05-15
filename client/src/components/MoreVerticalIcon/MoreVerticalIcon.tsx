import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface MoreVerticalIconProps extends CommonProps {}

export const MoreVerticalIcon: React.FC<MoreVerticalIconProps> = React.memo(
	function MoreVerticalIcon(props) {
		const { className } = props;
		return (
			<SvgIcon className={className} viewBox='0 0 24 24'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7Zm0 3a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 10Zm-2 9a2 2 0 1 1 4.001.001A2 2 0 0 1 10 19Z'
				/>
			</SvgIcon>
		);
	}
);
