import { mockChats } from '@/mocks/chats';
import { Chat } from '@/models/chat';

export const getChatsApi = async (): Promise<Array<Chat>> => {
	return Promise.resolve(mockChats);
};
