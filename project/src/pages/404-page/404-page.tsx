import { Link } from 'react-router-dom';
import Logo from 'src/components/logo/logo';
import { AppRoute } from 'src/const';

const Page404 = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <Logo />
    </header>

    <div className="sign-in user-page__content" style={{ textAlign: 'center' }}>
      <h1>404 Not Found</h1>
      <div className="user-block" style={{ justifyContent: 'center' }}>
        <Link className="user-block__link" to={AppRoute.Root}>
          Вернуться на главную
        </Link>
      </div>
    </div>

    <footer className="page-footer">
      <div className="logo">
        <a href="main.html" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
);

export default Page404;
