import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';
import { QueryProvider } from '@/packages/QueryContext';

import styles from './App.module.css';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<QueryProvider>
				<React.Suspense fallback={'Loading...'}>
					<Routes>
						{routes.map(({ Component, path }) => (
							<Route path={path} element={<Component />} key={path} />
						))}
					</Routes>
				</React.Suspense>
			</QueryProvider>
		</BrowserRouter>
	);
};

export default App;
