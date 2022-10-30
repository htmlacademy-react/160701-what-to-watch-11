import MainPage from 'src/pages/main-page/main-page';
import { TFilmCardInfo } from 'src/pages/main-page/main-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from 'src/const';
import Page404 from 'src/pages/404-page/404-page';
import SingInPage from 'src/pages/sing-in-page/sing-in-page';
import MyListPage from 'src/pages/my-list-page/my-list-page';
import PlayerPage from 'src/pages/player-page/player-page';
import MoviePage from 'src/pages/movie-page/movie-page';

type TApp = {
  film: TFilmCardInfo;
};

const App = (props: TApp): JSX.Element => {
  const { film } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage filmCardInfo={film} />} />
        <Route path={AppRoute.Login} element={<SingInPage />} />
        <Route path={AppRoute.MyList} element={<MyListPage />} />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
