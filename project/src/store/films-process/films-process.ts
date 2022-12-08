import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_NAME_GENRE, NameSpace } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';

type TInitialState = {
  films: {
    currentGenre: string;
    currentFilm: TFilm | null;
    currentFilmLoadingEnd: boolean;
    all: TFilm[];
    similar: TFilm[];
    allLoading: boolean;
    similarLoading: boolean;
  };
  comments: {
    data: TFilmComment[];
    loading: boolean;
  };
};
const initialState: TInitialState = {
  films: {
    currentGenre: DEFAULT_NAME_GENRE,
    currentFilm: null,
    currentFilmLoadingEnd: false,
    all: [],
    similar: [],
    allLoading: false,
    similarLoading: false,
  },
  comments: {
    data: [],
    loading: false,
  },
};
export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    currentGenre: (state, action: PayloadAction<string>) => {
      state.films.currentGenre = action.payload;
    },
    currentFilm: (state, action: PayloadAction<TFilm>) => {
      state.films.currentFilm = action.payload;
    },
    currentFilmLoadingEnd: (state, action: PayloadAction<boolean>) => {
      state.films.currentFilmLoadingEnd = action.payload;
    },
  },
  extraReducers(builder) {},
});
