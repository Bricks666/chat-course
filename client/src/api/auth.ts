import { mockAuth } from '@/mocks/auth';
import { Auth } from '@/models/auth';

export const getAuthApi = async (): Promise<Auth> => {
	return Promise.resolve(mockAuth);
};
