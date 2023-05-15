import { faker } from '@faker-js/faker';
import { Auth } from '@/models/auth';

export const mockAuth: Auth = {
	id: +faker.random.numeric(2),
	name: faker.internet.userName(),
  photo: faker.internet.avatar()
};
