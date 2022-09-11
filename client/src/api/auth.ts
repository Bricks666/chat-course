import { Auth } from '@/contexts/AuthContext';

export const getAuthApi = async (): Promise<Auth> => {
	return Promise.resolve({
		id: 0,
		name: 'Test user name',
	});
};
