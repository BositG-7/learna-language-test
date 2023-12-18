import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { useAuth } from 'modules/auth/context';
import { Auth, SingleCountry, Translator } from 'pages';
import Home from 'pages/home';

import AuthProtected from './auth-protected';
import UserRoute from './user-route';

const Routes = () => {
	const { user } = useAuth();

	return (
		<Switch>
			<Route path="" element={!user?.email ? <Navigate to="/auth" /> : <Navigate to="/dashboard" />} />

			<Route path="auth" element={<AuthProtected allowed={!user?.email} redirectURL="/" />}>
				<Route path="login" element={<Auth.Login />} />
				<Route path="register" element={<Auth.Register />} />

				<Route path="*" index element={<Navigate to="/auth/login" />} />
			</Route>
			<Route path="dashboard" element={<UserRoute allowed={!!user?.email} redirectURL="/" />}>
				<Route path="vocabulary" element={<SingleCountry />} />
				<Route path="translator" element={<Translator />} />
				<Route path="" index element={<Home />} />

				<Route path="*" index element={<Navigate to="/dashboard" />} />
			</Route>

			<Route path="*" element={<Navigate to="/" />} />
		</Switch>
	);
};

export default Routes;
