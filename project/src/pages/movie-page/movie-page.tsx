import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import { AppRoute, PageTitles } from 'src/const';
import { useAppSelector } from 'src/hooks';

const MoviePage = () => {
  const films = useAppSelector((state) => state.films);
  const { id: currentFilmId } = useParams();
  const currentFilm = films.find((film) => film.id === Number(currentFilmId));

  if (!currentFilm) {
    return <Navigate to={AppRoute.ErrorPage} />;
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
