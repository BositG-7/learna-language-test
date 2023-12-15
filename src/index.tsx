import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/order
import { Containers } from 'modules/auth';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
// eslint-disable-next-line import/order
import { Routes } from 'routes';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import './assets/style.css';
import 'react-phone-input-2/lib/style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const client = new QueryClient();

root.render(
	<BrowserRouter>
		<QueryParamProvider adapter={ReactRouter6Adapter}>
			<QueryClientProvider client={client}>
				<Containers.Auth>
					<Routes />
				</Containers.Auth>
			</QueryClientProvider>
		</QueryParamProvider>
	</BrowserRouter>
);
