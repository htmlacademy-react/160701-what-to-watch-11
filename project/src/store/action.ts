import { createAction } from '@reduxjs/toolkit';
import { TFilm } from 'src/types/films';

const changeCurrentGenre = createAction('films/currentGenre', (value: string) => ({
  payload: value,
}));

const getAllFilms = createAction('films/getAll', (value: TFilm[]) => ({
  payload: value,
}));

export { changeCurrentGenre, getAllFilms };
