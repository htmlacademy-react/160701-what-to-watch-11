import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
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

const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

export { changeCurrentGenre, setAllFilms, setCurrentFilm, loadFilms, requireAuthorization };
