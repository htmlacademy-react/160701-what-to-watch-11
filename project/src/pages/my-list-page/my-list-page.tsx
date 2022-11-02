import { Helmet } from 'react-helmet-async';
import FilmsList from 'src/components/films-list/films-list';
import Logo from 'src/components/logo/logo';
import { PageTitles } from 'src/const';
import { TFilm } from 'src/types/films';

type TMylistPage = {
  films: TFilm[];
};
const MyListPage = ({ films }: TMylistPage) => (
  <>
    <Helmet>
      <title>{PageTitles.MyList}</title>
    </Helmet>

    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <ul className="user-block">
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
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />
      </section>

      <footer className="page-footer">
        <Logo isLight />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
);

export default MyListPage;
