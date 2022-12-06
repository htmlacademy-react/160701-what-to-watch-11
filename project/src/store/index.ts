import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer, filmsReducer, userReducer } from './reducer';
import { createApi } from 'src/services/api';
import { redirect } from './middlewares/redirect';

const reducer = combineReducers({
  rootState: rootReducer,
  userState: userReducer,
  filmsState: filmsReducer,
});
const api = createApi();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export { store, api, reducer };
