import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus, RouteName } from 'src/const';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { changeFavoriteFilmAction } from 'src/store/api-actions';
import { getFavoriteFilms } from 'src/store/films-process/selectors';
import { getAuthorizationStatus } from 'src/store/user-process/selectors';

type TFilmCardButtons = {
  id: string | number;
  withReviewButton?: boolean;
};

const FilmCardButtons = ({ id = '', withReviewButton = true }: TFilmCardButtons) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const favoriteFilmsCount = favoriteFilms.length;
  const inList = favoriteFilms.find((film) => film.id === id);

  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={() => {
          navigate(`${RouteName.Player}/${id}`);
        }}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        onClick={() => {
          if (isAuth) {
            dispatch(
              changeFavoriteFilmAction({
                filmId: id,
                status: Number(!inList),
              }),
            );
          } else {
            navigate(AppRoute.Login);
          }
        }}
        className="btn btn--list film-card__button"
        type="button"
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref={`#${inList ? 'in-list' : 'add'}`}></use>
        </svg>
        <span>My list</span>
        {!!favoriteFilmsCount && <span className="film-card__count">{favoriteFilmsCount}</span>}
      </button>
      {withReviewButton && (
        <Link
          className="btn film-card__button"
          to={`/${RouteName.Films}/${id}/${RouteName.Review}`}
        >
          Add review
        </Link>
      )}
    </div>
  );
};

export default FilmCardButtons;
