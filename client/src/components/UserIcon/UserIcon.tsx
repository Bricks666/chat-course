import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface UserIconProps extends CommonProps {}

export const UserIcon: React.FC<UserIconProps> = React.memo(function UserIcon(
	props
) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 24 24'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M14 7c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2Zm2 0c0 2.206-1.794 4-4 4S8 9.206 8 7s1.794-4 4-4 4 1.794 4 4ZM5 20c0-3.86 3.141-7 7-7s7 3.14 7 7a1 1 0 1 1-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 1 1-2 0Z'
			/>
		</SvgIcon>
	);
});
