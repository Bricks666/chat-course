import { faker } from '@faker-js/faker';
import { Message } from '@/models/message';
import { mockAuth } from './auth';

export const getMockMessages = (chatId: number): Message[] =>
	new Array(+faker.random.numeric(2)).fill(0).map(() => ({
		id: +faker.random.numeric(2),
		content: faker.hacker.phrase(),
		sendedAt: faker.date.past(2022).toLocaleDateString(),
		senderId: faker.helpers.arrayElement([chatId, mockAuth.id]),
		senderName: faker.internet.userName(),
		senderPhoto: faker.helpers.arrayElement([
			undefined,
			faker.internet.avatar(),
		]),
	}));
