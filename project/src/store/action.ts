import { createAction } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';
import { UserData } from 'src/types/user-data';

const changeCurrentGenre = createAction<string>('films/currentGenre');
const changeCurrentFilm = createAction<TFilm>('films/currentFilm');

const setAllFilms = createAction<TFilm[]>('films/setAllFilms');
const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

const setSimilarFilms = createAction<TFilm[]>('films/setSimilarFilms');
const setSimilarFilmsLoadingStatus = createAction<boolean>('films/setSimilarFilmsLoadingStatus');

const setFilmComments = createAction<TFilmComment[]>('films/setFilmComments');
const setCommentsLoadingStatus = createAction<boolean>('films/setCommentsLoadingStatus');

const setError = createAction<string | null>('app/setEror');
const setUser = createAction<UserData>('user/setUser');
const setAuthorizationStatus = createAction<AuthStatus>('user/setAuthorizationStatus');

export {
  changeCurrentFilm,
  changeCurrentGenre,
  setAllFilms,
  setSimilarFilms,
  setAuthorizationStatus,
  setFilmsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setCommentsLoadingStatus,
  setFilmComments,
  setError,
  setUser,
};
