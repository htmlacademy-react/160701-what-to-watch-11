import { Link } from 'react-router-dom';
import { TFilmCard } from 'src/types/films';

const FilmCard = ({ film, onMouseOver }: TFilmCard) => {
  const { id, name, posterImage } = film;

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => onMouseOver(id)}>
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default FilmCard;
