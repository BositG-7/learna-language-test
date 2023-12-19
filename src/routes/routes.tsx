import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { Auth, SingleCountry } from 'pages';
import About from 'pages/about';
import Contact from 'pages/contact';
import Home from 'pages/home';
import Language from 'pages/language';
import { getSession } from 'services/store';

import AuthProtected from './auth-protected';
import UserRoute from './user-route';

const Routes = () => {
	const user = getSession();

	return (
		<Switch>
			<Route path="" element={!user?.email ? <Navigate to="/auth" /> : <Navigate to="/dashboard" />} />

			<Route path="auth" element={<AuthProtected allowed={!user?.email} redirectURL="/" />}>
				<Route path="login" element={<Auth.Login />} />
				<Route path="register" element={<Auth.Register />} />

				<Route path="*" index element={<Navigate to="/auth/login" />} />
			</Route>
			<Route path="dashboard" element={<UserRoute allowed={!!user?.email} redirectURL="/" />}>
				<Route path="home" element={<Home />} />
				<Route path="vocabulary" element={<SingleCountry />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="language/:language" element={<Language />} />

				<Route path="*" index element={<Navigate to="/dashboard/home" />} />
			</Route>

			<Route path="*" element={<Navigate to="/" />} />
		</Switch>
	);
};

export default Routes;
