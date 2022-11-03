import { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from 'src/const';
import { TFilm } from 'src/types/films';
import AddReviewForm from '../add-review-form/add-review-form';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Header from '../header/header';

type TFilmCard = {
  film: TFilm;
};
const FilmCard = ({ film }: TFilmCard) => {
  const {
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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    isMoviePage ? <div className="film-card__hero">{children}</div> : <>{children}</>;
  const FilmCardHeaderWrap = ({ children }: PropsWithChildren) =>
    // eslint-disable-next-line react/jsx-no-useless-fragment
    isAddReviewPage ? <div className="film-card__header">{children}</div> : <>{children}</>;
  const FilmCardButtons = () => (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      {isMoviePage && (
        <Link className="btn film-card__button" to="review">
          Add review
        </Link>
      )}
    </div>
  );
  const FilmCardPoster = ({ isBig, isSmall }: { isBig?: boolean; isSmall?: boolean }) => (
    <div
      className={`film-card__poster
      ${isBig ? 'film-card__poster--big' : ''}
      ${isSmall ? 'film-card__poster--small' : ''}`}
    >
      <img src={posterImage} width="218" height="327" alt={name} />
    </div>
  );
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
  const FilmCardData = () => (
    <>
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>
    </>
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
          {isAddReviewPage && <FilmCardPoster isSmall />}
          {isMoviePage && (
            <FilmCardWrap>
              <FilmCardDescr>
                <FilmCardData />
                <FilmCardButtons />
              </FilmCardDescr>
            </FilmCardWrap>
          )}
        </FilmCardHeroWrap>

        {isMoviePage && (
          <FilmCardWrap className="film-card__translate-top">
            <FilmCardInfo>
              <FilmCardPoster isBig />
              <FilmCardDescr>
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li className="film-nav__item film-nav__item--active">
                      <a href="!#" className="film-nav__link">
                        Overview
                      </a>
                    </li>
                    <li className="film-nav__item">
                      <a href="!#" className="film-nav__link">
                        Details
                      </a>
                    </li>
                    <li className="film-nav__item">
                      <a href="!#" className="film-nav__link">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="film-rating">
                  <div className="film-rating__score">{rating}</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
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
              <FilmCardPoster />
              <FilmCardDescr>
                <FilmCardData />
                <FilmCardButtons />
              </FilmCardDescr>
            </FilmCardInfo>
          </FilmCardWrap>
        )}
      </FilmCardHeaderWrap>
      {isAddReviewPage && <AddReviewForm />}
    </section>
  );
};

export default FilmCard;
