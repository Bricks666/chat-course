import { getMockMessages } from '@/mocks/messages';
import { Message } from '@/models/message';

export const getMessagesApi = async (
	chatId: number
): Promise<Array<Message>> => {
	return Promise.resolve(getMockMessages(chatId));
};
