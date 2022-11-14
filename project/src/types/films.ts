export type TFilm = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type TFilmCardInfo = Pick<
  TFilm,
  'posterImage' | 'backgroundImage' | 'name' | 'genre' | 'released'
>;

export type TFilmCard = {
  film: Pick<TFilm, 'id' | 'name' | 'posterImage' | 'previewImage' | 'previewVideoLink'>;
  playing: boolean;
  onMouseOver: (id: number) => void;
  onMouseLeave: () => void;
};

export type TFilmsList = {
  films: TFilm[];
  maxFilms?: number;
};
