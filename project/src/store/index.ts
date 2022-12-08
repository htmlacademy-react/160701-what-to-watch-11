import { combineReducers, configureStore } from '@reduxjs/toolkit';
import //  rootReducer,
// filmsReducer,
'./reducer';
import { createApi } from 'src/services/api';
import { redirect } from './middlewares/redirect';
import { rootReducer } from './root-reducer';

// const reducer = combineReducers({
// rootState: rootReducer,
// userState: userReducer,
// filmsState: filmsReducer,
// });

const api = createApi();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export { store, api, reducer };
