import { Link } from 'react-router-dom';
import { TFilm } from 'src/types/films';

type TGenresList = {
  films: TFilm[];
};

const GenresList = ({ films }: TGenresList) => {
  const DEFAULT_NAME_GENRE = 'All genres';
  const MAX_FILMS_GENRES = 10;
  const filmsGenres = films.map((film) => film.genre);
  const genres = Array.from(new Set([DEFAULT_NAME_GENRE, ...filmsGenres])).slice(
    0,
    MAX_FILMS_GENRES,
  );

  return (
    <ul className="catalog__genres-list">
      {genres.map((item, idx) => (
        <li
          className={`catalog__genres-item ${idx === 0 ? 'catalog__genres-item--active' : ''}`}
          key={item}
        >
          <Link className="catalog__genres-link" to="/">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
