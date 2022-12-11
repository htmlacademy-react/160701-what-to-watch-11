import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // changeCurrentFilm,
  // setError,
  // setFilmsLoadingStatus,
  // setSimilarFilmsLoadingStatus,
  // setCommentsLoadingStatus,
  // setAllFilms,
  // setSimilarFilms,
  // setFilmComments,
  redirectToRoute,
  // setCurrentFilmLoadingEnd,
} from './action';
import { TAppDispatch, TState } from 'src/types/state';
import { APIRoute, APIRouteName, RouteName, TIMEOUT_SHOW_ERROR } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';
import { AuthData } from 'src/types/auth-data';
import { UserData } from 'src/types/user-data';
import { removeToken, setToken } from 'src/services/token';

import { TAddReveiw } from 'src/types/reviews';
import { TabsNames } from 'src/components/film-card/film-card';

type ThunkApiConfig = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
};

const fetchFilmAction = createAsyncThunk<TFilm, number | string, ThunkApiConfig>(
  'data/fetchFilm',
  async (filmId, { extra: api }) => {
    const { data } = await api.get<TFilm>(`${APIRoute.Films}/${filmId}`);
    return data;
  },
);

const fetchSimilarFilmsAction = createAsyncThunk<TFilm[], number | string, ThunkApiConfig>(
  'data/fetchSimilarFilm',
  async (filmId, { extra: api }) => {
    // dispatch(setSimilarFilmsLoadingStatus(true));
    const { data } = await api.get<TFilm[]>(`${APIRoute.Films}/${filmId}/${APIRouteName.Similar}`);
    return data;
    // dispatch(setSimilarFilmsLoadingStatus(false));
    // dispatch(setSimilarFilms(data));
  },
);

const fetchCommentsFilmAction = createAsyncThunk<TFilmComment[], number | string, ThunkApiConfig>(
  'data/fetchFilmComments',
  async (filmId, { dispatch, extra: api }) => {
    // dispatch(setCommentsLoadingStatus(true));
    const { data } = await api.get<TFilmComment[]>(`${APIRoute.Comments}/${filmId}`);
    return data;
    // dispatch(setCommentsLoadingStatus(false));
    // dispatch(setFilmComments(data));
  },
);

const addCommentFilmAction = createAsyncThunk<
  void,
  { filmId: number } & TAddReveiw,
  ThunkApiConfig
>('data/addFilmComment', async ({ filmId, comment, rating }, { dispatch, extra: api }) => {
  await api.post(`${APIRoute.Comments}/${filmId}`, { comment, rating });
  dispatch(redirectToRoute(`${RouteName.Films}/${filmId}#${TabsNames.Reviews}`));
});

const fetchFilmsAction = createAsyncThunk<TFilm[], undefined, ThunkApiConfig>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    // dispatch(setFilmsLoadingStatus(true));
    const { data } = await api.get<TFilm[]>(APIRoute.Films);
    return data;
    // dispatch(setFilmsLoadingStatus(false));
    // dispatch(setAllFilms(data));
  },
);

const checkAuthAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get<UserData>(APIRoute.Login);
  },
);

const loginAction = createAsyncThunk<UserData, AuthData, ThunkApiConfig>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    const { token } = data;
    setToken(token);

    return data;
  },
);

const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    removeToken();
  },
);

export {
  fetchCommentsFilmAction,
  fetchSimilarFilmsAction,
  fetchFilmsAction,
  fetchFilmAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  addCommentFilmAction,
};
