import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFilms, setFilmsLoadingStatus } from './action';
import { TAppDispatch, TState } from 'src/types/state';
import { APIRoute } from 'src/const';
import { TFilm } from 'src/types/films';

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

export { fetchFilmsAction };
