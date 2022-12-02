import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { DEFAULT_NAME_GENRE } from 'src/const';
import { TFilm } from 'src/types/films';
import { UserData } from 'src/types/user-data';
import {
  changeCurrentGenre,
  changeCurrentFilm,
  loadFilms,
  loadSimilarFilms,
  requireAuthorization,
  setAllFilms,
  setError,
  setFilmsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setUser,
} from './action';

type TInitialState = {
  user: UserData | null;
  currentGenre: string;
  films: TFilm[];
  similarFilms: TFilm[];
  isSimilarFilmsLoading: boolean;
  currentFilm: TFilm | null;
  authorizationStatus: AuthStatus;
  isFilmsLoading: boolean;
  error: string | null;
};
const initialState: TInitialState = {
  user: null,
  currentGenre: DEFAULT_NAME_GENRE,
  films: [],
  similarFilms: [],
  currentFilm: null,
  authorizationStatus: AuthStatus.Unknown,
  isFilmsLoading: false,
  isSimilarFilmsLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.currentGenre = action.payload;
  });
  builder.addCase(changeCurrentFilm, (state, action) => {
    state.currentFilm = action.payload;
  });
  builder.addCase(setAllFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(loadSimilarFilms, (state, action) => {
    state.similarFilms = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setFilmsLoadingStatus, (state, action) => {
    state.isFilmsLoading = action.payload;
  });
  builder.addCase(setSimilarFilmsLoadingStatus, (state, action) => {
    state.isSimilarFilmsLoading = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});

export { reducer };
