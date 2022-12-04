import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootReducer, filmsReducer, userReducer } from './reducer';
import { createApi } from 'src/services/api';

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
    }),
});

export { store, api };
