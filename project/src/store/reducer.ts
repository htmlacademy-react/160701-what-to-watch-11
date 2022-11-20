import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { TFilm } from 'src/types/films';
import {
  changeCurrentGenre,
  loadFilms,
  requireAuthorization,
  setAllFilms,
  setCurrentFilm,
} from './action';

type TInitialState = {
  films: TFilm[];
  currentFilm: null | TFilm;
  authorizationStatus: AuthStatus;
};
const initialState: TInitialState = {
  films: [],
  currentFilm: null,
  authorizationStatus: AuthStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (_, action) => {
    window.location.hash = `#${action.payload}`;
  });
  builder.addCase(setAllFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(setCurrentFilm, (state, action) => {
    state.currentFilm = action.payload;
  });
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export { reducer };
