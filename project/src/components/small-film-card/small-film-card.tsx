import { Link } from 'react-router-dom';
import { TFilmCard } from 'src/types/films';
import Player from '../player/player';

const SmallFilmCard = ({ film, playing, onMouseOver, onMouseLeave }: TFilmCard) => {
  const { id, name, posterImage, previewVideoLink } = film;

  const ImageSize = {
    Width: 280,
    Height: 175,
  } as const;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <Player
          poster={posterImage}
          src={previewVideoLink}
          width={ImageSize.Width}
          height={ImageSize.Height}
          playing={playing}
          loop
          muted
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

export default SmallFilmCard;
