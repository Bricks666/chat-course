import * as React from 'react';
import { ComponentType, lazy } from 'react';
import { Navigate } from 'react-router-dom';

export interface Route {
	readonly Component: ComponentType;
	readonly path: string;
}

const LazyChats = lazy(() => import('../pages/Chats'));
const LazyUsers = lazy(() => import('../pages/Users'));

export const routes: Route[] = [
	{
		Component: LazyChats,
		path: '/chats/*',
	},
	{
		Component: LazyUsers,
		path: '/contacts',
	},
	{
		Component: () => <Navigate to='/chats' />,
		path: '*',
	},
];
