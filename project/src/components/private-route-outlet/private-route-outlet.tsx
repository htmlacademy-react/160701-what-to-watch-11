import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute, AuthStatus } from 'src/const';

type TPrivateRoute = {
  authStatus: AuthStatus;
};

const PrivateRouteOutlet = (props: TPrivateRoute) => {
  const { authStatus } = props;

  return authStatus === AuthStatus.Auth ? <Outlet /> : <Navigate to={AppRoute.Login} />;
};

export default PrivateRouteOutlet;
