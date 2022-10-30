import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from 'src/const';

type TPrivateRoute = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

const PrivateRoute = (props: TPrivateRoute) => {
  const { authStatus, children } = props;

  return authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
};

export default PrivateRoute;
