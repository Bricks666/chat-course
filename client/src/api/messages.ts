import { Message } from '@/models/message';

export const getMessagesApi = async (
	chatId: number
): Promise<Array<Message>> => {
	console.log(chatId);
	return Promise.resolve([]);
};
