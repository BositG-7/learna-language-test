import { Navigate, Outlet, useNavigate } from 'react-router-dom';

interface UserRouteProps {
	allowed: boolean;
	redirectURL?: string;
}

const UserRoute = ({ allowed = false, redirectURL = '/' }: UserRouteProps) => {
	const navigete = useNavigate();

	if (allowed)
		return (
			<>
				<Outlet />
			</>
		);

	return <Navigate to="/" />;
};

export default UserRoute;
