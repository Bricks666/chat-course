import * as React from 'react';
import { ComponentType, lazy } from 'react';
import { Navigate } from 'react-router-dom';

export interface Route {
	readonly Component: ComponentType;
	readonly path: string;
	readonly children?: Array<Route>;
}

const LazyChats = lazy(() => import('../pages/Chats'));
const LazyUsers = lazy(() => import('../pages/Users'));
const LazyDialog = lazy(() =>
	import('../components/Dialog').then(({ Dialog }) => ({ default: Dialog }))
);

export const routes: Route[] = [
	{
		Component: LazyChats,
		path: '/chats/*',
		children: [
			{
				Component: LazyDialog,
				path: ':id',
			},
		],
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
