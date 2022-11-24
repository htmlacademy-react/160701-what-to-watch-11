import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from 'src/const';
import { useAppSelector } from 'src/hooks';

const UserBlock = () => {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.user);
  const isAuth = authStatus === AuthStatus.Auth;

  return (
    <ul className="user-block">
      {isAuth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl} alt={user?.name} width="63" height="63" />
            </div>
            <span className="user-block__name">{user?.name}</span>
          </li>
          <li className="user-block__item">
            <a href="!#" className="user-block__link">
              Sign out
            </a>
          </li>
        </>
      ) : (
        <Link className="user-block__link" to={AppRoute.Login}>
          Sign in
        </Link>
      )}
    </ul>
  );
};

export default UserBlock;
