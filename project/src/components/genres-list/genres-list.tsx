import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AppRoute, RouteName } from 'src/const';
import { TFilm } from 'src/types/films';

type TGenresList = {
  films: TFilm[];
};

const GenresList = ({ films }: TGenresList) => {
  const location = useLocation();
  const hash = decodeURI(location.hash.slice(1));
  const DEFAULT_NAME_GENRE = 'All genres';
  const MAX_FILMS_GENRES = 10;
  const filmsGenres = films.map((film) => film.genre);
  const genres = Array.from(new Set([DEFAULT_NAME_GENRE, ...filmsGenres])).slice(
    0,
    MAX_FILMS_GENRES,
  );
  const [active, setActive] = useState(hash || DEFAULT_NAME_GENRE);

  return (
    <ul className="catalog__genres-list">
      {genres.map((item) => (
        <li
          className={`catalog__genres-item ${
            item === active ? 'catalog__genres-item--active' : ''
          }`}
          key={item}
        >
          <a
            className="catalog__genres-link"
            href="!#"
            onClick={(evt) => {
              evt.preventDefault();
              window.location.hash = `#${item}`;
              setActive(item);
            }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
