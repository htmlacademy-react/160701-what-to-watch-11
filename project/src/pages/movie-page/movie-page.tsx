import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import Loader from 'src/components/loader/loader';
import { AppRoute, PageTitles } from 'src/const';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { fetchSimilarFilmsAction } from 'src/store/api-actions';

const MoviePage = () => {
  const isSimilarFilmsLoading = useAppSelector(({ filmsState }) => filmsState.films.similarLoading);
  const { id: currentFilmId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentFilmId) {
      dispatch(fetchSimilarFilmsAction(currentFilmId));
    }
  }, [currentFilmId, dispatch]);

  const similarFilms = useAppSelector(({ filmsState }) => filmsState.films.similar);
  const currentFilm = useAppSelector(({ filmsState }) => filmsState.films.currentFilm);

  if (!currentFilmId) {
    return <Navigate to={AppRoute.ErrorPage} />;
  }

  return (
    <>
      <Helmet>
        <title>{`${PageTitles.Film} ${currentFilm ? `- ${currentFilm.name}` : ''}`}</title>
      </Helmet>

      {isSimilarFilmsLoading ? (
        <Loader />
      ) : (
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} maxFilms={4} />
        </section>
      )}
    </>
  );
};

export default MoviePage;
