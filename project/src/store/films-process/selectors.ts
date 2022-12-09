import { NameSpace } from 'src/const';
import { TState } from 'src/types/state';

export const getCurrentGenre = (state: TState) => state[NameSpace.Films].films.currentGenre;

export const getCurrentFilm = (state: TState) => state[NameSpace.Films].films.currentFilm;
export const getCurrentFilmLoadingEnd = (state: TState) =>
  state[NameSpace.Films].films.currentFilmLoadingEnd;

export const getFilms = (state: TState) => state[NameSpace.Films].films.all;
export const getFilmsLoading = (state: TState) => state[NameSpace.Films].films.allLoading;

export const getSimilarFilms = (state: TState) => state[NameSpace.Films].films.similar;
export const getSimilarLoading = (state: TState) => state[NameSpace.Films].films.similarLoading;

export const getComments = (state: TState) => state[NameSpace.Films].comments.data;
export const getCommentsLoading = (state: TState) => state[NameSpace.Films].comments.loading;
