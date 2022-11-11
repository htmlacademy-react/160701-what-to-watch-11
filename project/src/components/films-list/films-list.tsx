import { useState } from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import { TFilmsList } from 'src/types/films';
const FilmsList = ({ films, maxFilms = films.length }: TFilmsList) => {
  const [activeFilmCard, setActiveFilmCard] = useState<number | null>(null);
  let isHovered = false;

  const cardMouseOverHandler = (id: number) => {
    isHovered = true;
    setTimeout(() => {
      if (isHovered) {
        setActiveFilmCard(id);
      }
    }, 1000);
  };
  const cardMouseLeaveHandler = () => {
    isHovered = false;
    setActiveFilmCard(null);
  };

  return (
    <div className="catalog__films-list">
      {films
        .filter((_, idx) => idx + 1 <= maxFilms)
        .map((film) => (
          <SmallFilmCard
            key={film.id}
            film={film}
            onMouseOver={cardMouseOverHandler}
            onMouseLeave={cardMouseLeaveHandler}
            withVideo={film.id === activeFilmCard}
          />
        ))}
    </div>
  );
};

export default FilmsList;
