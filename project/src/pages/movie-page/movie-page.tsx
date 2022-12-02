import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import FilmsList from 'src/components/films-list/films-list';
import Loader from 'src/components/loader/loader';
import { AppRoute, PageTitles } from 'src/const';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { fetchSimilarFilmsAction } from 'src/store/api-actions';

const MoviePage = () => {
  const isSimilarFilmsLoading = useAppSelector((state) => state.isSimilarFilmsLoading);
  const { id: currentFilmId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentFilmId) {
      dispatch(fetchSimilarFilmsAction(currentFilmId));
    }
  }, [currentFilmId, dispatch]);

  const similarFilms = useAppSelector((state) => state.similarFilms);
  const currentFilm = useAppSelector((state) => state.currentFilm);

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
