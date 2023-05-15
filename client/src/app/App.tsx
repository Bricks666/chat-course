import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from '@/packages/Query';
import { AppRoutes } from '@/components/AppRoutes';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<QueryProvider>
				<React.Suspense fallback={'Loading...'}>
					<AppRoutes />
				</React.Suspense>
			</QueryProvider>
		</BrowserRouter>
	);
};

export default App;
