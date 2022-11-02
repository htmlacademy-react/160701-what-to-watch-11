import MainPage from 'src/pages/main-page/main-page';
import { TFilm, TFilmCardInfo } from 'src/types/films';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthStatus } from 'src/const';
import Page404 from 'src/pages/404-page/404-page';
import SingInPage from 'src/pages/sing-in-page/sing-in-page';
import MyListPage from 'src/pages/my-list-page/my-list-page';
import PlayerPage from 'src/pages/player-page/player-page';
import MoviePage from 'src/pages/movie-page/movie-page';
import PrivateRoute from '../private-route/private-route';
import AddReviewPage from 'src/pages/add-review-page/add-review-page';
import UserLayout from 'src/layouts/user-layout/user-layout';

type TApp = {
  film: TFilmCardInfo;
  films: TFilm[];
};

const App = (props: TApp): JSX.Element => {
  const { film, films } = props;

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage filmCardInfo={film} films={films} />} />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <AddReviewPage films={films} />
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Player} element={<PlayerPage film={films[0]} />} />
          <Route path={AppRoute.Film} element={<MoviePage films={films} />} />
          <Route element={<UserLayout filmsCount={films.length} />}>
            <Route
              path={AppRoute.MyList}
              element={
                <PrivateRoute authStatus={AuthStatus.Auth}>
                  <MyListPage films={films} />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Login} element={<SingInPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
