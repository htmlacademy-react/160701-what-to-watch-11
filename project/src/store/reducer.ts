import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { DEFAULT_NAME_GENRE } from 'src/const';
import { TFilm } from 'src/types/films';
import {
  changeCurrentGenre,
  loadFilms,
  requireAuthorization,
  setAllFilms,
  setFilmsLoadingStatus,
} from './action';

type TInitialState = {
  currentGenre: string;
  films: TFilm[];
  authorizationStatus: AuthStatus;
  isFilmsLoading: boolean;
};
const initialState: TInitialState = {
  currentGenre: DEFAULT_NAME_GENRE,
  films: [],
  authorizationStatus: AuthStatus.Unknown,
  isFilmsLoading: false,
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
});

export { reducer };
