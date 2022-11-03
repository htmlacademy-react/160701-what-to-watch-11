import { Outlet, useLocation } from 'react-router-dom';
import FilmCard from 'src/components/film-card/film-card';
import Footer from 'src/components/footer/footer';
import { TFilm } from 'src/types/films';

type TFilmCardLayout = {
  film: TFilm;
};

const FilmCardLayout = ({ film }: TFilmCardLayout) => {
  const location = useLocation();
  const isAddReviewPage = location.pathname.includes('review');

  return (
    <>
      <FilmCard film={film} />
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
