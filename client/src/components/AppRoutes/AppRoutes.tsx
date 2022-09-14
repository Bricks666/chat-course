import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { Route as RouteType, routes } from '@/routes';

export interface AppRoutesProps extends CommonProps {}
export const AppRoutes: React.FC<AppRoutesProps> = React.memo(() => {
	return (
		<Routes>
			{routes.map(({ path, Component }) => (
				<Route path={path} element={<Component />} key={path} />
			))}
		</Routes>
	);
});
