import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface AttachIconProps extends CommonProps {}

export const AttachIcon: React.FC<AttachIconProps> = React.memo(
	function AttachIcon(props) {
		const { className } = props;
		return (
			<SvgIcon className={className} viewBox='0 0 24 24'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M9.294 21c-1.656 0-3.23-.666-4.432-1.875-2.388-2.403-2.486-6.213-.22-8.494l7.386-7.43A4.085 4.085 0 0 1 14.95 2c1.194 0 2.328.479 3.192 1.349 1.721 1.731 1.788 4.482.146 6.132l-7.395 7.429a2.535 2.535 0 0 1-1.815.748 2.738 2.738 0 0 1-1.95-.821c-1.053-1.061-1.086-2.752-.073-3.772L13.88 6.21a.999.999 0 1 1 1.416 1.41l-6.823 6.856c-.24.242-.207.669.074.951a.76.76 0 0 0 .53.231.55.55 0 0 0 .399-.158l7.394-7.429c.867-.873.802-2.358-.146-3.312-.906-.912-2.446-.984-3.277-.148l-7.386 7.43c-1.494 1.503-1.396 4.049.22 5.674C7.104 18.544 8.174 19 9.294 19a3.648 3.648 0 0 0 2.61-1.064l7.387-7.43a1 1 0 1 1 1.418 1.41l-7.386 7.43C12.262 20.412 10.83 21 9.293 21'
          strokeWidth={0.4}
				/>
			</SvgIcon>
		);
	}
);
