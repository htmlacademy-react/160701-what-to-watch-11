import { createReducer } from '@reduxjs/toolkit';
import { TFilm } from 'src/types/films';
import { changeCurrentGenre, loadFilms, setAllFilms, setCurrentFilm } from './action';

type TInitialState = {
  films: TFilm[];
  currentFilm: null | TFilm;
};
const initialState: TInitialState = {
  films: [],
  currentFilm: null,
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
});

export { reducer };
