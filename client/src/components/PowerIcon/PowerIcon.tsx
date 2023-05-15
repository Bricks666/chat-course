import * as React from 'react';
import { CommonProps } from '@/interfaces/common';

import { SvgIcon } from '../SvgIcon';

export interface PowerIconProps extends CommonProps {}

export const PowerIcon: React.FC<PowerIconProps> = React.memo(
	function PowerIcon(props) {
		const { className } = props;
		return (
			<SvgIcon className={className} viewBox='0 0 24 24'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M13 12a1 1 0 1 1-2 0V2a1 1 0 1 1 2 0v10Zm2.239-8.459a1 1 0 0 1 1.347-.43A9.973 9.973 0 0 1 22 12.001c0 5.512-4.486 10-10 10S2 17.512 2 12a9.972 9.972 0 0 1 5.415-8.89 1 1 0 0 1 .918 1.777A7.977 7.977 0 0 0 4 12c0 4.411 3.589 8 8 8 4.41 0 8-3.589 8-8a7.978 7.978 0 0 0-4.332-7.112.999.999 0 0 1-.43-1.347Z'
				/>
			</SvgIcon>
		);
	}
);
