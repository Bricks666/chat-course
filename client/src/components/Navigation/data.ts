import { BellIcon } from '../BellIcon';
import { CalendarIcon } from '../CalendarIcon';
import { ChatIcon } from '../ChatIcon';
import { GridIcon } from '../GridIcon';
import { NavItem } from '../NavigationItem';
import { SettingIcon } from '../SettingIcon';
import { UserIcon } from '../UserIcon';

export const navigation: NavItem[] = [
	{
		label: 'home',
		href: '/',
		Icon: GridIcon,
	},
	{
		label: 'chats',
		href: '/chats',
		Icon: ChatIcon,
	},
	{
		label: 'contacts',
		href: '/contacts',
		Icon: UserIcon,
	},
	{
		label: 'notifications',
		href: '/notifications',
		Icon: BellIcon,
	},
	{
		label: 'calendar',
		href: '/calendar',
		Icon: CalendarIcon,
	},
	{
		label: 'settings',
		href: '/settings',
		Icon: SettingIcon,
	},
];
