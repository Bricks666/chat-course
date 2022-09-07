import { createQueryContext } from '@/packages/QueryContext';
import { User } from './types';

export const UsersContext = createQueryContext<User[]>(undefined);
