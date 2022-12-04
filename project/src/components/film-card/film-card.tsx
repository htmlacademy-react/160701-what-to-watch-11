import { PropsWithChildren, useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { AppRoute, RouteName } from 'src/const';
import { TFilm } from 'src/types/films';
import { adjustColor } from 'src/utils/main';
import AddReviewForm from '../add-review-form/add-review-form';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FilmNav from '../film-nav/film-nav';
import Header from '../header/header';
import FilmCardButtons from './components/film-card-buttons/film-card-buttons';
import FilmCardPoster from './components/film-card-poster/film-card-poster';
import FilmCardData from './components/film-card-data/film-card-data';
import FilmCardNavContent from './components/film-card-nav-content/film-card-nav-content';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { fetchFilmAction } from 'src/store/api-actions';

type TFilmCard = {
  films: TFilm[];
};

const TabsNames = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
} as const;

const FilmCard = ({ films }: TFilmCard) => {
  const location = useLocation();
  const isAddReviewPage = location.pathname.includes(RouteName.Review);
  const isMoviePage = location.pathname.includes(RouteName.Films) && !isAddReviewPage;
  const isRootPage = location.pathname === AppRoute.Root;
  const isFull = isMoviePage || isAddReviewPage;

  const dispatch = useAppDispatch();
  const DEFAULT_FILM_ID = films[0]?.id;
  const { id: currentFilmId = DEFAULT_FILM_ID } = useParams();

  useEffect(() => {
    if (currentFilmId) {
      dispatch(fetchFilmAction(currentFilmId));
    }
  }, [currentFilmId, dispatch]);

  const currentFilm = useAppSelector(({ filmsState }) => filmsState.films.currentFilm);

  if (!currentFilm || !films.length) {
    return <Navigate to={AppRoute.ErrorPage} />;
  }
  const { id, name, posterImage, backgroundImage, genre, released, backgroundColor } = currentFilm;

  const FilmCardHeroWrap = ({ children }: PropsWithChildren) =>
    isMoviePage ? <div className="film-card__hero">{children}</div> : <>{children}</>;

  const FilmCardHeaderWrap = ({ children }: PropsWithChildren) =>
    isAddReviewPage ? <div className="film-card__header">{children}</div> : <>{children}</>;

  const FilmCardWrap = ({
    children,
    className = '',
  }: PropsWithChildren<{ className?: string }>) => (
    <div className={`film-card__wrap ${className}`}>{children}</div>
  );
  const FilmCardDescr = ({ children }: PropsWithChildren) => (
    <div className="film-card__desc">{children}</div>
  );
  const FilmCardInfo = ({ children }: PropsWithChildren) => (
    <div className="film-card__info">{children}</div>
  );

  const dataNav = Object.keys(TabsNames);
  const currentTab = location.hash.slice(1) || TabsNames.Overview;

  return (
    <section className={`film-card ${isFull ? 'film-card--full' : ''}`} style={{ backgroundColor }}>
      <FilmCardHeaderWrap>
        <FilmCardHeroWrap>
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>{isAddReviewPage && <Breadcrumbs />}</Header>
          {isAddReviewPage && <FilmCardPoster posterImage={posterImage} name={name} isSmall />}
          {isMoviePage && (
            <FilmCardWrap>
              <FilmCardDescr>
                <FilmCardData name={name} genre={genre} released={released} />
                <FilmCardButtons id={id} />
              </FilmCardDescr>
            </FilmCardWrap>
          )}
        </FilmCardHeroWrap>

        {isMoviePage && (
          <FilmCardWrap className="film-card__translate-top">
            <FilmCardInfo>
              <FilmCardPoster posterImage={posterImage} name={name} isBig />
              <FilmCardDescr>
                <FilmNav data={dataNav} current={currentTab} />
                <FilmCardNavContent current={currentTab} film={currentFilm} />
              </FilmCardDescr>
            </FilmCardInfo>
          </FilmCardWrap>
        )}
        {isRootPage && (
          <FilmCardWrap>
            <FilmCardInfo>
              <FilmCardPoster posterImage={posterImage} name={name} />
              <FilmCardDescr>
                <FilmCardData name={name} genre={genre} released={released} />
                <FilmCardButtons id={id} />
              </FilmCardDescr>
            </FilmCardInfo>
          </FilmCardWrap>
        )}
      </FilmCardHeaderWrap>
      {isAddReviewPage && <AddReviewForm backgroundColor={adjustColor(backgroundColor, 10)} />}
    </section>
  );
};

export { TabsNames };
export default FilmCard;
