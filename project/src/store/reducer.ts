import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentGenre } from './action';

const initialState = {
  currentGenre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.currentGenre = action.payload;
  });
});

export { reducer };
