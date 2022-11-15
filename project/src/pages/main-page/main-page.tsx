import { Helmet } from 'react-helmet-async';
import FilmsList from 'src/components/films-list/films-list';
import GenresList from 'src/components/genres-list/genres-list';
import ShowMoreBtn from 'src/components/show-more-btn/show-more-btn';
import { PageTitles } from 'src/const';
import { TFilm } from 'src/types/films';

type TMainPage = {
  films: TFilm[];
};

const MainPage = ({ films }: TMainPage) => (
  <>
    <Helmet>
      <title>{PageTitles.Root}</title>
    </Helmet>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList films={films} />

      <FilmsList films={films} maxFilms={8} />

      <ShowMoreBtn />
    </section>
  </>
);

export default MainPage;
