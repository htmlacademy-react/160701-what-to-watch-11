import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import GenresList from 'src/components/genres-list/genres-list';
import { DEFAULT_NAME_GENRE, PageTitles } from 'src/const';
import { useAppSelector } from 'src/hooks';
import { TFilm } from 'src/types/films';

type TMainPage = {
  films: TFilm[];
};

const MainPage = ({ films }: TMainPage) => {
  const location = useLocation();
  const hash = decodeURI(location.hash.slice(1));
  const currentGenre = useAppSelector((state) => state.currentGenre);
  const filteredBy = hash || currentGenre;

  const sortedFilms =
    filteredBy === DEFAULT_NAME_GENRE ? films : films.filter((film) => film.genre === filteredBy);

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
