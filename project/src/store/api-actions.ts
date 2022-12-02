import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadSimilarFilms,
  changeCurrentFilm,
  loadFilms,
  requireAuthorization,
  setError,
  setFilmsLoadingStatus,
  setUser,
  setSimilarFilmsLoadingStatus,
} from './action';
import { TAppDispatch, TState } from 'src/types/state';
import { APIRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from 'src/const';
import { TFilm } from 'src/types/films';
import { AuthData } from 'src/types/auth-data';
import { UserData } from 'src/types/user-data';
import { removeToken, setToken } from 'src/services/token';
import { store } from '.';

const clearError = createAsyncThunk('app/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});

const fetchFilmAction = createAsyncThunk<
  void,
  number | string,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<TFilm>(`${APIRoute.Films}/${filmId}`);
  dispatch(changeCurrentFilm(data));
});

const fetchSimilarFilmsAction = createAsyncThunk<
  void,
  number | string,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (filmId, { dispatch, extra: api }) => {
  dispatch(setSimilarFilmsLoadingStatus(true));
  const { data } = await api.get<TFilm[]>(`${APIRoute.Films}/${filmId}/similar`);
  dispatch(setSimilarFilmsLoadingStatus(false));
  dispatch(loadSimilarFilms(data));
});

const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setFilmsLoadingStatus(true));
  const { data } = await api.get<TFilm[]>(APIRoute.Films);
  dispatch(setFilmsLoadingStatus(false));
  dispatch(loadFilms(data));
});

const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data: User } = await api.get<UserData>(APIRoute.Login);

    dispatch(setUser(User));
    dispatch(requireAuthorization(AuthStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthStatus.NoAuth));
  }
});

const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data: User } = await api.post<UserData>(APIRoute.Login, { email, password });

  setToken(User.token);
  dispatch(setUser(User));
  dispatch(requireAuthorization(AuthStatus.Auth));
});

const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  removeToken();
  dispatch(requireAuthorization(AuthStatus.NoAuth));
});

export {
  fetchSimilarFilmsAction,
  fetchFilmsAction,
  fetchFilmAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  clearError,
};
