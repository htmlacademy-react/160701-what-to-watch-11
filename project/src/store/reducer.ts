import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_NAME_GENRE } from 'src/const';
import { TFilm } from 'src/types/films';
import { changeCurrentGenre, setAllFilms, setCurrentFilm } from './action';

const initialState = {
  currentGenre: DEFAULT_NAME_GENRE,
  films: [] as TFilm[],
  currentFilm: null as TFilm | null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.currentGenre = action.payload;
  });
  builder.addCase(setAllFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(setCurrentFilm, (state, action) => {
    state.currentFilm = action.payload;
  });
});

export { reducer };
