import { Outlet, useLocation } from 'react-router-dom';
import FilmCard from 'src/components/film-card/film-card';
import Footer from 'src/components/footer/footer';
import { RouteName } from 'src/const';
import { TFilm } from 'src/types/films';

type TFilmCardLayout = {
  films: TFilm[];
};
const FilmCardLayout = ({ films }: TFilmCardLayout) => {
  const location = useLocation();
  const isAddReviewPage = location.pathname.includes(RouteName.Review);

  return (
    <>
      <FilmCard films={films} />
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
