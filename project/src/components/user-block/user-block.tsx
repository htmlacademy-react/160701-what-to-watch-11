import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from 'src/const';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { logoutAction } from 'src/store/api-actions';
import { getAuthorizationStatus, getUserData } from 'src/store/user-process/selectors';

const UserBlock = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserData);
  const isAuth = authStatus === AuthStatus.Auth;

  return (
    <ul className="user-block">
      {isAuth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppRoute.MyList}>
                <img src={user?.avatarUrl} alt={user?.name} width="63" height="63" />
              </Link>
            </div>
            <span className="user-block__name">{user?.name}</span>
          </li>
          <li className="user-block__item">
            <a
              href="!#"
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
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
