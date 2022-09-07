import { createQueryContext } from '@/packages/QueryContext';
import { Type } from './types';

export const TemplateName = createQueryContext<Type[]>(undefined);
