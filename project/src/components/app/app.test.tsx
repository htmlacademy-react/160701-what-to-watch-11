import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { AppRoute, AuthStatus, DEFAULT_NAME_GENRE, NameSpace, RouteName } from 'src/const';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { render, screen } from '@testing-library/react';
import { makeFakeFilmsArray } from 'src/utils/mocks';
import thunk from 'redux-thunk';
import { TabsNames } from '../film-card/film-card';
import { changeAuthStatus } from 'src/store/user-process/user-process';

const mockStore = configureMockStore([thunk]);
const fakeAllFilms = makeFakeFilmsArray();

const store = mockStore({
  [NameSpace.User]: { authorizationStatus: AuthStatus.NoAuth, userData: null },
  [NameSpace.Films]: {
    films: {
      currentGenre: DEFAULT_NAME_GENRE,
      currentFilm: fakeAllFilms[0],
      currentFilmLoading: false,
      all: fakeAllFilms,
      similar: makeFakeFilmsArray(),
      allLoading: false,
      similarLoading: false,
      favorite: [],
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
  it(`should render "index page" when user navigate to "${AppRoute.Root}"`, () => {
    history.push(AppRoute.Root);
    render(fakeApp);
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });
  it(`should render "AuthScreen" when user navigate to "${AppRoute.Login}"`, () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    // expect(screen.getByRole('heading')).toHaveTextContent('Sing in');
    // expect(screen.getByText(/Sing in/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
  it(`should render "MovieScreen" when user navigate to "/${RouteName.Films}/${fakeAllFilms[0].id}}"`, () => {
    const fakeFilm = fakeAllFilms[0];

    history.push(`/${RouteName.Films}/${fakeFilm.id}`);

    render(fakeApp);
    // expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
    expect(screen.getByText(TabsNames.Overview)).toBeInTheDocument();
  });
  it(`should render "PlayerScreen" when user navigate to "/${RouteName.Player}/${fakeAllFilms[0].id}"`, () => {
    const fakeFilm = fakeAllFilms[0];

    history.push(`/${RouteName.Player}/${fakeFilm.id}`);
    render(fakeApp);
    expect(screen.getByText(fakeFilm.name)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });
  it(`should render "Error404Screen" when user navigate to "${AppRoute.ErrorPage}`, () => {
    history.push(AppRoute.ErrorPage);
    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
  it(`should render "MyListScreen" when user navigate to "/${AppRoute.MyList}`, async () => {
    await store.dispatch(changeAuthStatus(AuthStatus.Auth));

    history.push(AppRoute.MyList);

    render(fakeApp);
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
