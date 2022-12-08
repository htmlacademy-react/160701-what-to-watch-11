import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // changeCurrentFilm,
  setError,
  setFilmsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setCommentsLoadingStatus,
  setAllFilms,
  setSimilarFilms,
  setFilmComments,
  redirectToRoute,
  // setCurrentFilmLoadingEnd,
} from './action';
import { TAppDispatch, TState } from 'src/types/state';
import { APIRoute, APIRouteName, RouteName, TIMEOUT_SHOW_ERROR } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';
import { AuthData } from 'src/types/auth-data';
import { UserData } from 'src/types/user-data';
import { removeToken, setToken } from 'src/services/token';
import { store } from '.';
import { TAddReveiw } from 'src/types/reviews';
import { TabsNames } from 'src/components/film-card/film-card';

const clearError = createAsyncThunk('app/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});

type ThunkApiConfig = {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
};

const fetchFilmAction = createAsyncThunk<void, number | string, ThunkApiConfig>(
  'data/fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<TFilm>(`${APIRoute.Films}/${filmId}`);
      // dispatch(changeCurrentFilm(data));
      // dispatch(setCurrentFilmLoadingEnd(true));
    } catch {
      // dispatch(setCurrentFilmLoadingEnd(true));
    }
  },
);

const fetchSimilarFilmsAction = createAsyncThunk<void, number | string, ThunkApiConfig>(
  'data/fetchFilm',
  async (filmId, { dispatch, extra: api }) => {
    dispatch(setSimilarFilmsLoadingStatus(true));
    const { data } = await api.get<TFilm[]>(`${APIRoute.Films}/${filmId}/${APIRouteName.Similar}`);
    dispatch(setSimilarFilmsLoadingStatus(false));
    dispatch(setSimilarFilms(data));
  },
);

const fetchCommentsFilmAction = createAsyncThunk<void, number | string, ThunkApiConfig>(
  'data/fetchFilmComments',
  async (filmId, { dispatch, extra: api }) => {
    dispatch(setCommentsLoadingStatus(true));
    const { data } = await api.get<TFilmComment[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(setCommentsLoadingStatus(false));
    dispatch(setFilmComments(data));
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

const fetchFilmsAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsLoadingStatus(true));
    const { data } = await api.get<TFilm[]>(APIRoute.Films);
    dispatch(setFilmsLoadingStatus(false));
    dispatch(setAllFilms(data));
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
  clearError,
  addCommentFilmAction,
};
