import MainPage from 'src/pages/main-page/main-page';
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
import FilmCardLayout from 'src/layouts/film-card-layout/film-card-layout';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { useAppSelector } from 'src/hooks';

const App = (): JSX.Element => {
  const films = useAppSelector((state) => state.films);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <Routes>
          <Route path={AppRoute.Player} element={<PlayerPage films={films} />} />

          <Route element={<FilmCardLayout films={films} />}>
            <Route path={AppRoute.Root} element={<MainPage films={films} />} />
            <Route
              path={AppRoute.AddReview}
              element={
                <PrivateRoute authStatus={AuthStatus.Auth}>
                  <AddReviewPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Film} element={<MoviePage />} />
          </Route>

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
