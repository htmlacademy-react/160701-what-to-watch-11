import { Link } from 'react-router-dom';
import { AppRoute } from 'src/const';

const Page404 = () => (
  <>
    <h1>404 Not Found</h1>
    <Link to={AppRoute.Root}>Вернуться на главную</Link>
  </>
);

export default Page404;
