import { Navigate, Outlet, useNavigate } from 'react-router-dom';

interface UserRouteProps {
	allowed: boolean;
	redirectURL?: string;
}

const UserRoute = ({ allowed = false, redirectURL = '/' }: UserRouteProps) => {
	const navigete = useNavigate();

	console.log(allowed);

	if (allowed)
		return (
			<>
				<Outlet />
			</>
		);

	return <Navigate to={redirectURL} />;
};

export default UserRoute;
