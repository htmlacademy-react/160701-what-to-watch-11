import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { DEFAULT_NAME_GENRE } from 'src/const';
import { TFilm } from 'src/types/films';
import { UserData } from 'src/types/user-data';
import {
  changeCurrentGenre,
  loadFilms,
  requireAuthorization,
  setAllFilms,
  setError,
  setFilmsLoadingStatus,
  setUser,
} from './action';

type TInitialState = {
  user: UserData | null;
  currentGenre: string;
  films: TFilm[];
  authorizationStatus: AuthStatus;
  isFilmsLoading: boolean;
  error: string | null;
};
const initialState: TInitialState = {
  user: null,
  currentGenre: DEFAULT_NAME_GENRE,
  films: [],
  authorizationStatus: AuthStatus.Unknown,
  isFilmsLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.currentGenre = action.payload;
  });
  builder.addCase(setAllFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setFilmsLoadingStatus, (state, action) => {
    state.isFilmsLoading = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});

export { reducer };
