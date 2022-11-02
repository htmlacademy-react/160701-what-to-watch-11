import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { TFilmsList } from 'src/types/films';

const FilmsList = ({ films, maxFilms = films.length }: TFilmsList) => {
  const [, setActiveFilmCard] = useState(0);
  const cardMouseOverHandler = (id: number) => {
    setActiveFilmCard(id);
  };
  return (
    <div className="catalog__films-list">
      {films
        .filter((_, idx) => idx + 1 <= maxFilms)
        .map((film) => (
          <FilmCard key={film.id} film={film} onMouseOver={cardMouseOverHandler} />
        ))}
    </div>
  );
};

export default FilmsList;
