import { Chat } from '@/models/chat';

export const mockChats: Array<Chat> = [
	{
		id: 7,
		companionName: 'Companion1',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage: 'Message',
		newMessageCount: 0,
	},
	{
		id: 1,
		companionName: 'Companion3',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage: 'Message Message Message Message Message Message',
		newMessageCount: 1,
	},
	{
		id: 2,
		companionName: 'Companion2',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage: 'I',
		newMessageCount: 0,
	},
	{
		id: 3,
		companionName: 'Companion4',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage:
			'Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message MessageMessage Message Message Message Message MessageMessage Message Message Message Message MessageMessage Message Message Message Message Message',
		newMessageCount: 0,
	},
	{
		id: 4,
		companionName: 'Companion7',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage: 'Message',
		newMessageCount: 0,
	},
	{
		id: 8,
		companionName: 'Companion01',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage: 'Message Message Message Message Message Message',
		newMessageCount: 99,
	},
	{
		id: 10,
		companionName: 'Companion11',
		lastActivityTime: new Date().toLocaleDateString(),
		lastMessage: 'Message',
		newMessageCount: 0,
	},
];
