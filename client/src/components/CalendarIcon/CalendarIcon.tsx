import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface CalendarIconProps extends CommonProps {}

export const CalendarIcon: React.FC<CalendarIconProps> = React.memo(
	function CalendarIcon(props) {
		const { className } = props;
		return (
			<SvgIcon className={className} viewBox='0 0 24 24'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7 16c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm5-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1Zm6 5H6c-.551 0-1-.449-1-1v-6h14v6c0 .551-.449 1-1 1ZM6 6h1v1c0 .55.45 1 1 1s1-.45 1-1V6h6v1c0 .55.45 1 1 1s1-.45 1-1V6h1c.551 0 1 .449 1 1v4H5V7c0-.551.449-1 1-1Zm12-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H9V3c0-.55-.45-1-1-1s-1 .45-1 1v1H6C4.346 4 3 5.346 3 7v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3Z'
				/>
			</SvgIcon>
		);
	}
);
