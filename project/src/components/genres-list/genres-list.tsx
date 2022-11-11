import { Link } from 'react-router-dom';

const GenresList = () => {
  const sampleGenres = [' All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror'];

  return (
    <ul className="catalog__genres-list">
      {sampleGenres.map((item, idx) => (
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
