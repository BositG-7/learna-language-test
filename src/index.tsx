import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
// eslint-disable-next-line import/order
import { Containers } from 'modules/auth';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
// eslint-disable-next-line import/order
import { Routes } from 'routes';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import './assets/style/style.css';
import 'react-phone-input-2/lib/style.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme();
const client = new QueryClient();

root.render(
	<BrowserRouter>
		<QueryParamProvider adapter={ReactRouter6Adapter}>
			<QueryClientProvider client={client}>
				<ThemeProvider theme={theme}>
					<Containers.Auth>
						<Routes />
					</Containers.Auth>
				</ThemeProvider>
			</QueryClientProvider>
		</QueryParamProvider>
	</BrowserRouter>
);
