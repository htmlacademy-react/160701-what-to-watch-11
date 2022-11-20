import { createAction } from '@reduxjs/toolkit';
import { TFilm } from 'src/types/films';

const changeCurrentGenre = createAction('films/currentGenre', (value: string) => ({
  payload: value,
}));

const setAllFilms = createAction('films/getAll', (value: TFilm[]) => ({
  payload: value,
}));

const setCurrentFilm = createAction('films/current', (value: TFilm) => ({
  payload: value,
}));

const loadFilms = createAction<TFilm[]>('data/loadFilms');

export { changeCurrentGenre, setAllFilms, setCurrentFilm, loadFilms };
