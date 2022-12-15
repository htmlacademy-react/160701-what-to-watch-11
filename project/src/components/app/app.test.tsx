import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { AppRoute, AuthStatus, DEFAULT_NAME_GENRE, NameSpace } from 'src/const';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { render, screen } from '@testing-library/react';
import { makeFakeFilmsArray, makeFakeFilm } from 'src/utils/mocks';

const fakeFilms = makeFakeFilmsArray();
const fakeFilm = makeFakeFilm();
const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.User]: { authorizationStatus: AuthStatus.Auth, userData: null },
  [NameSpace.Films]: {
    films: {
      currentGenre: DEFAULT_NAME_GENRE,
      currentFilm: fakeFilm,
      currentFilmLoading: false,
      all: fakeFilms,
      similar: fakeFilms,
      allLoading: false,
      similarLoading: false,
      favorite: fakeFilms,
    },
    comments: {
      data: [],
      loading: false,
      addCommentLoading: false,
    },
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();
    window.scrollTo = jest.fn();
  });
  // it('should render "index page" when user navigate to "/"', () => {
  //   history.push(AppRoute.Root);
  //   render(fakeApp);
  //   expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  // });
  // it('should render "AuthScreen" when user navigate to "/login"', () => {
  //   history.push(AppRoute.Login);

  //   render(fakeApp);

  //   expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  // });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
