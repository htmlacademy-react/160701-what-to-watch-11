import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import mockFilms from 'src/mocks/films';
import { setAllFilms, setCurrentFilm } from 'src/store/action';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(setAllFilms(mockFilms));
store.dispatch(setCurrentFilm(mockFilms[0]));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
