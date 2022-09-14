import { mockChats } from '@/mocks/chats';
import { Chat } from '@/models/chat';

export const getChatsApi = async (): Promise<Array<Chat>> => {
	return Promise.resolve(mockChats);
};

export const getChatApi = async (chatId: number): Promise<Chat | undefined> => {
	return Promise.resolve(mockChats.find(({ id }) => id === chatId));
};
