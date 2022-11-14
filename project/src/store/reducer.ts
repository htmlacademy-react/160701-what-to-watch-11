import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentGenre, getAllFilms } from './action';
import films from 'src/mocks/films';

const initialState = {
  currentGenre: 'All genres',
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.currentGenre = action.payload;
  });
  builder.addCase(getAllFilms, (state, action) => {
    state.films = action.payload;
  });
});

export { reducer };
