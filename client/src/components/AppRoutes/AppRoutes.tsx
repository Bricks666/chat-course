import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonProps } from '@/interfaces/common';
import { Route as RouteType, routes } from '@/routes';

export interface AppRoutesProps extends CommonProps {}

const renderRoute = (route: RouteType): React.ReactElement => {
	const { Component, path, children = [] } = route;
	return (
		<Route path={path} element={<Component />} key={path}>
			{children.map(renderRoute)}
		</Route>
	);
};

export const AppRoutes: React.FC<AppRoutesProps> = React.memo(() => {
	return <Routes>{routes.map(renderRoute)}</Routes>;
});
