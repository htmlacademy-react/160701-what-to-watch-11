import { Helmet } from 'react-helmet-async';
import FilmsList from 'src/components/films-list/films-list';
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

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmsList films={films} />
    </section>
  </>
);

export default MyListPage;
