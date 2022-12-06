import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus } from 'src/const';
import { DEFAULT_NAME_GENRE } from 'src/const';
import { TFilm, TFilmComment } from 'src/types/films';
import { UserData } from 'src/types/user-data';
import {
  changeCurrentGenre,
  changeCurrentFilm,
  setAllFilms,
  setError,
  setFilmsLoadingStatus,
  setSimilarFilmsLoadingStatus,
  setUser,
  setCommentsLoadingStatus,
  setFilmComments,
  setSimilarFilms,
  setAuthorizationStatus,
  setCurrentFilmLoadingEnd,
} from './action';

type TInitialState = {
  user: {
    userData: UserData | null;
    authorizationStatus: AuthStatus;
  };
  films: {
    currentGenre: string;
    currentFilm: TFilm | null;
    currentFilmLoadingEnd: boolean;
    all: TFilm[];
    similar: TFilm[];
    allLoading: boolean;
    similarLoading: boolean;
  };
  comments: {
    data: TFilmComment[];
    loading: boolean;
  };
  error: string | null;
};
const initialState: TInitialState = {
  user: {
    userData: null,
    authorizationStatus: AuthStatus.Unknown,
  },
  films: {
    currentGenre: DEFAULT_NAME_GENRE,
    currentFilm: null,
    currentFilmLoadingEnd: false,
    all: [],
    similar: [],
    allLoading: false,
    similarLoading: false,
  },
  comments: {
    data: [],
    loading: false,
  },
  error: null,
};

const filmsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCurrentGenre, (state, action) => {
    state.films.currentGenre = action.payload;
  });

  builder.addCase(changeCurrentFilm, (state, action) => {
    state.films.currentFilm = action.payload;
  });
  builder.addCase(setCurrentFilmLoadingEnd, (state, action) => {
    state.films.currentFilmLoadingEnd = action.payload;
  });

  builder.addCase(setAllFilms, (state, action) => {
    state.films.all = action.payload;
  });
  builder.addCase(setFilmsLoadingStatus, (state, action) => {
    state.films.allLoading = action.payload;
  });

  builder.addCase(setFilmComments, (state, action) => {
    state.comments.data = action.payload;
  });
  builder.addCase(setCommentsLoadingStatus, (state, action) => {
    state.comments.loading = action.payload;
  });

  builder.addCase(setSimilarFilms, (state, action) => {
    state.films.similar = action.payload;
  });
  builder.addCase(setSimilarFilmsLoadingStatus, (state, action) => {
    state.films.similarLoading = action.payload;
  });
});

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthorizationStatus, (state, action) => {
    state.user.authorizationStatus = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user.userData = action.payload;
  });
});

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export { rootReducer, filmsReducer, userReducer };
