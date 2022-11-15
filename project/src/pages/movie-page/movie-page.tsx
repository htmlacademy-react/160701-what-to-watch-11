import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import { AppRoute, PageTitles } from 'src/const';
import { useAppSelector } from 'src/hooks';

const MoviePage = () => {
  const films = useAppSelector((state) => state.films);
  const currentFilm = useAppSelector((state) => state.currentFilm);

  if (!currentFilm) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <>
      <Helmet>
        <title>
          {PageTitles.Film} - {currentFilm.name}
        </title>
      </Helmet>

      {films.length ? (
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={films} maxFilms={4} />
        </section>
      ) : null}
    </>
  );
};

export default MoviePage;
