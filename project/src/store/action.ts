import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';
import { UserData } from 'src/types/user-data';

const changeCurrentGenre = createAction('films/currentGenre', (value: string) => ({
  payload: value,
}));

const changeCurrentFilm = createAction('films/currentFilm', (value: TFilm) => ({
  payload: value,
}));

const setAllFilms = createAction('films/getAll', (value: TFilm[]) => ({
  payload: value,
}));

const loadFilms = createAction<TFilm[]>('data/loadFilms');

const loadSimilarFilms = createAction('data/loadSimilarFilms', (value: TFilm[]) => ({
  payload: value,
}));
const loadFilmComments = createAction('data/loadFilmComments', (value: TFilmComment[]) => ({
  payload: value,
}));

const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

const setCommentsLoadingStatus = createAction<boolean>('data/setCommentsLoadingStatus');
const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');
const setSimilarFilmsLoadingStatus = createAction<boolean>('data/setSimilarFilmsLoadingStatus');

const setError = createAction<string | null>('app/setEror');

const setUser = createAction('user/setUser', (value: UserData) => ({
  payload: value,
}));

export {
  changeCurrentFilm,
  changeCurrentGenre,
  setAllFilms,
  loadFilms,
  loadSimilarFilms,
  requireAuthorization,
  setFilmsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setCommentsLoadingStatus,
  loadFilmComments,
  setError,
  setUser,
};
