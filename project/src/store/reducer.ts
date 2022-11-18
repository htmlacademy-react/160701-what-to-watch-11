import { createReducer } from '@reduxjs/toolkit';
import { TFilm } from 'src/types/films';
import { changeCurrentGenre, setAllFilms, setCurrentFilm } from './action';

const initialState = {
  films: [] as TFilm[],
  currentFilm: null as TFilm | null,
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
});

export { reducer };
