import { AnyFunction, createQueryContext } from '@/packages/QueryContext';
import { Auth } from './types';

export const AuthContext = createQueryContext<Auth, AnyFunction>(undefined);
