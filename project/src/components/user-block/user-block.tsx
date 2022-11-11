import { Link } from 'react-router-dom';
import { AppRoute } from 'src/const';

const UserBlock = () => {
  const isAuth = true;

  return (
    <ul className="user-block">
      {isAuth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
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
