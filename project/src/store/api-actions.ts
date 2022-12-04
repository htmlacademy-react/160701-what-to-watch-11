import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  changeCurrentFilm,
  setError,
  setFilmsLoadingStatus,
  setUser,
  setSimilarFilmsLoadingStatus,
  setCommentsLoadingStatus,
  setAllFilms,
  setSimilarFilms,
  setFilmComments,
  setAuthorizationStatus,
} from './action';
import { TAppDispatch, TState } from 'src/types/state';
import { APIRoute, APIRouteName, AuthStatus, TIMEOUT_SHOW_ERROR } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';
import { AuthData } from 'src/types/auth-data';
import { UserData } from 'src/types/user-data';
import { removeToken, setToken } from 'src/services/token';
import { store } from '.';
import { TAddReveiw } from 'src/types/reviews';

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
    const { data } = await api.get<TFilm>(`${APIRoute.Films}/${filmId}`);
    dispatch(changeCurrentFilm(data));
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
  try {
    await api.post(`${APIRoute.Comments}/${filmId}`, { comment, rating });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
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
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: User } = await api.get<UserData>(APIRoute.Login);

      dispatch(setUser(User));
      dispatch(setAuthorizationStatus(AuthStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthStatus.NoAuth));
    }
  },
);

const loginAction = createAsyncThunk<void, AuthData, ThunkApiConfig>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: User } = await api.post<UserData>(APIRoute.Login, { email, password });

    setToken(User.token);
    dispatch(setUser(User));
    dispatch(setAuthorizationStatus(AuthStatus.Auth));
  },
);

const logoutAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(setAuthorizationStatus(AuthStatus.NoAuth));
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
