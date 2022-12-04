import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { rootReducer, filmsReducer, userReducer } from '../reducer';
import { REDIRECT_TO_ROUTE } from '../action';

// type Reducer = ReturnType<typeof rootReducer & typeof filmsReducer & typeof userReducer>;
type Reducer = ReturnType<typeof rootReducer | typeof filmsReducer | typeof userReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action: PayloadAction<string>) => {
    if (action.type === REDIRECT_TO_ROUTE) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
