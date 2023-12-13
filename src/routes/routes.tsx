import { Route, Routes as Switch } from 'react-router-dom';
import { Home } from 'pages';

const Routes = () => {
	const i = 0;

	return (
		<Switch>
			<Route path="" element={<Home />} />

			<Route path="*" element={<Home />} />
		</Switch>
	);
};

export default Routes;
