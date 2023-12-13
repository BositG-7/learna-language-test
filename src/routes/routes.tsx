import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { Home, SingleCountry } from 'pages';

const Routes = () => {
	const i = 0;

	return (
		<Switch>
			<Route path="" element={<Home />} />
			<Route path="language/:language" element={<SingleCountry />} />

			<Route path="*" element={<Navigate to="/" />} />
		</Switch>
	);
};

export default Routes;
