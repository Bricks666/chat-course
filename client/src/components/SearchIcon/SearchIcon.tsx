import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface SearchIconProps extends CommonProps {}

export const SearchIcon: React.FC<SearchIconProps> = React.memo(
	function SearchIcon(props) {
		const { className } = props;
		return (
			<SvgIcon className={className} viewBox='0 0 24 24'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6Zm15.707 8.293-3.395-3.396A7.952 7.952 0 0 0 19 11c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l3.396 3.395a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z'
				/>
			</SvgIcon>
		);
	}
);
