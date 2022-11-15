import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import FilmCard from 'src/components/film-card/film-card';
import Footer from 'src/components/footer/footer';
import { AppRoute } from 'src/const';
import { TFilm } from 'src/types/films';

type TFilmCardLayout = {
  films: TFilm[];
};
const FilmCardLayout = ({ films }: TFilmCardLayout) => {
  const DEFAULT_FILM_ID = films[0].id;
  const { id: currentFilmId = DEFAULT_FILM_ID } = useParams();
  const currentFilm = films.find((film) => film.id === Number(currentFilmId));
  const location = useLocation();
  const isAddReviewPage = location.pathname.includes('review');

  if (!currentFilm) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <>
      <FilmCard film={currentFilm} />
      {isAddReviewPage ? (
        <Outlet />
      ) : (
        <div className="page-content">
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default FilmCardLayout;
