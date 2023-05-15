import * as React from 'react';
import { CommonProps } from '@/interfaces/common';
import { SvgIcon } from '../SvgIcon';

export interface ChatIconProps extends CommonProps {}

export const ChatIcon: React.FC<ChatIconProps> = React.memo(function ChatIcon(
	props
) {
	const { className } = props;
	return (
		<SvgIcon className={className} viewBox='0 0 24 24'>
			<path fill='none' strokeWidth='2.5' d='m 2.8857497,16.292599 c 0,0 -3.1280371,-7.0070331 2.6353101,-11.8271259 5.7633472,-4.82009267 11.5173432,-1.0932305 11.5173432,-1.0932305 0,0 5.407929,3.1404256 4.956522,9.2997124 -0.46649,4.595294 -2.81059,6.783316 -6.038577,8.53929 C 14.138213,22.423562 8.6719238,22.06071 7.7558344,21.040641 5.9195359,21.208199 3.559036,22.330114 2.3278053,21.743526 1.4441792,21.203469 2.6997682,18.109575 2.8857497,16.292599 Z' />
			<circle fill='none' strokeWidth='2' cx='6.9000001' cy='11.983948' r='1.5' />
			<circle fill='none' strokeWidth='2' cx='11.996536' cy='11.983948' r='1.5' />
			<circle fill='none' strokeWidth='2' cx='17.094' cy='11.983948' r='1.5' />
		</SvgIcon>
	);
});
