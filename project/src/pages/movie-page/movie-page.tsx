import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import { AppRoute, PageTitles } from 'src/const';
import { TFilm } from 'src/types/films';

type TMoviePage = {
  films: TFilm[];
};

const MoviePage = ({ films }: TMoviePage) => {
  const { id: currentFilmId } = useParams();
  const currentFilm = films.find((film) => film.id === Number(currentFilmId));

  if (!currentFilm) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <>
      <Helmet>
        <title>{PageTitles.Film}</title>
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
