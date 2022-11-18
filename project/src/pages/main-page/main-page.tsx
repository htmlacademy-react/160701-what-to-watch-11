import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import GenresList from 'src/components/genres-list/genres-list';
import { DEFAULT_NAME_GENRE, PageTitles } from 'src/const';
import { TFilm } from 'src/types/films';

type TMainPage = {
  films: TFilm[];
};

const MainPage = ({ films }: TMainPage) => {
  const location = useLocation();
  const hash = decodeURI(location.hash.slice(1));
  const filteredBy = hash || DEFAULT_NAME_GENRE;
  const sortedFilms = films.filter(
    (film) => filteredBy === DEFAULT_NAME_GENRE || filteredBy === film.genre,
  );

  return (
    <>
      <Helmet>
        <title>{PageTitles.Root}</title>
      </Helmet>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList films={films} />

        <FilmsList films={sortedFilms} maxFilms={8} />
      </section>
    </>
  );
};

export default MainPage;
