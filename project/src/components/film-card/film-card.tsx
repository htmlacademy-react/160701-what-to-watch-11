import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoute } from 'src/const';
import { TFilm } from 'src/types/films';
import { adjustColor, getFilmRatingPhrase } from 'src/utils';
import AddReviewForm from '../add-review-form/add-review-form';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FilmNav from '../film-nav/film-nav';
import Header from '../header/header';
import FilmCardButtons from './components/film-card-buttons/film-card-buttons';
import FilmCardPoster from './components/film-card-poster/film-card-poster';
import FilmCardData from './components/film-card-data/film-card-data';

type TFilmCard = {
  film: TFilm;
};
const FilmCard = ({ film }: TFilmCard) => {
  const {
    id,
    name,
    posterImage,
    backgroundImage,
    genre,
    released,
    backgroundColor,
    description,
    rating,
    director,
    starring,
    scoresCount,
  } = film;
  const location = useLocation();
  const isAddReviewPage = location.pathname.includes('review');
  const isMoviePage = location.pathname.includes('films') && !isAddReviewPage;
  const isRootPage = location.pathname === AppRoute.Root;
  const isFull = isMoviePage || isAddReviewPage;

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
                <FilmCardButtons id={id} withReviewLink />
              </FilmCardDescr>
            </FilmCardWrap>
          )}
        </FilmCardHeroWrap>

        {isMoviePage && (
          <FilmCardWrap className="film-card__translate-top">
            <FilmCardInfo>
              <FilmCardPoster posterImage={posterImage} name={name} isBig />
              <FilmCardDescr>
                <FilmNav />
                <div className="film-rating">
                  <div className="film-rating__score">{rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">{getFilmRatingPhrase(rating)}</span>
                    <span className="film-rating__count">{scoresCount} ratings</span>
                  </p>
                </div>
                <div className="film-card__text">
                  <p>{description}</p>

                  <p className="film-card__director">
                    <strong>Director: {director}</strong>
                  </p>

                  <p className="film-card__starring">
                    <strong>Starring: {starring.join(',')} and other</strong>
                  </p>
                </div>
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
                <FilmCardButtons />
              </FilmCardDescr>
            </FilmCardInfo>
          </FilmCardWrap>
        )}
      </FilmCardHeaderWrap>
      {isAddReviewPage && <AddReviewForm backgroundColor={adjustColor(backgroundColor, 10)} />}
    </section>
  );
};

export default FilmCard;
