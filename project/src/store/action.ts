import { createAction } from '@reduxjs/toolkit';
import { TFilm, TFilmComment } from 'src/types/films';
import { UserData } from 'src/types/user-data';

// const changeCurrentGenre = createAction<string>('films/currentGenre');
// const changeCurrentFilm = createAction<TFilm>('films/currentFilm');
// const setCurrentFilmLoadingEnd = createAction<boolean>('films/currentFilmLoadingEnd');

const setAllFilms = createAction<TFilm[]>('films/setAllFilms');
const setFilmsLoadingStatus = createAction<boolean>('films/setFilmsLoadingStatus');

const setSimilarFilms = createAction<TFilm[]>('films/setSimilarFilms');
const setSimilarFilmsLoadingStatus = createAction<boolean>('films/setSimilarFilmsLoadingStatus');

const setFilmComments = createAction<TFilmComment[]>('films/setFilmComments');
const setCommentsLoadingStatus = createAction<boolean>('films/setCommentsLoadingStatus');

const setError = createAction<string | null>('app/setEror');
const setUser = createAction<UserData>('user/setUser');

const REDIRECT_TO_ROUTE = 'app/redirectToRoute';
const redirectToRoute = createAction<string>(REDIRECT_TO_ROUTE);

export {
  // changeCurrentFilm,
  // setCurrentFilmLoadingEnd,
  // changeCurrentGenre,
  setAllFilms,
  setSimilarFilms,
  setFilmsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setCommentsLoadingStatus,
  setFilmComments,
  setError,
  setUser,
  redirectToRoute,
  REDIRECT_TO_ROUTE,
};
