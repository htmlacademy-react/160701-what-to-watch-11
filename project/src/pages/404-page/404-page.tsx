import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute, PageTitles } from 'src/const';

const Page404 = () => (
  <>
    <Helmet>
      <title>{PageTitles.Page404}</title>
    </Helmet>

    <div className="sign-in user-page__content" style={{ textAlign: 'center' }}>
      <h1>404 Not Found</h1>
      <div className="user-block" style={{ justifyContent: 'center' }}>
        <Link className="user-block__link" to={AppRoute.Root}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  </>
);

export default Page404;
