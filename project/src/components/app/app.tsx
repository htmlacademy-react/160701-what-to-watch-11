import MainPage from 'src/pages/main-page/main-page';
import { TFilmCardInfo } from 'src/pages/main-page/main-page';

type TApp = {
  film: TFilmCardInfo;
};

const App = (props: TApp): JSX.Element => {
  const { film } = props;

  return <MainPage filmCardInfo={film} />;
};

export default App;
