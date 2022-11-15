import { Helmet } from 'react-helmet-async';
import FilmsList from 'src/components/films-list/films-list';
import GenresList from 'src/components/genres-list/genres-list';
import ShowMoreBtn from 'src/components/show-more-btn/show-more-btn';
import { DEFAULT_NAME_GENRE, PageTitles } from 'src/const';
import { useAppSelector } from 'src/hooks';
import { TFilm } from 'src/types/films';

type TMainPage = {
  films: TFilm[];
};

const MainPage = ({ films }: TMainPage) => {
  const currentGenre = useAppSelector((state) => state.currentGenre);

  const sortedFilms =
    currentGenre === DEFAULT_NAME_GENRE
      ? films
      : films.filter((film) => film.genre === currentGenre);
  return (
    <>
      <Helmet>
        <title>{PageTitles.Root}</title>
      </Helmet>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList films={films} />

        <FilmsList films={sortedFilms} maxFilms={8} />

        <ShowMoreBtn />
      </section>
    </>
  );
};

export default MainPage;
