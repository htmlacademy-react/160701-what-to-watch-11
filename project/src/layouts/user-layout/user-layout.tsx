import { PropsWithChildren } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';
import { AppRoute } from 'src/const';

type TUserLayout = {
  filmsCount: number;
};
const UserLayout = ({ filmsCount }: TUserLayout) => {
  const location = useLocation();
  const isLoginPage = location.pathname === AppRoute.Login;
  const isMylistPage = location.pathname === AppRoute.MyList;

  const PageTitle = ({ children }: PropsWithChildren) => (
    <h1 className="page-title user-page__title">{children}</h1>
  );
  return (
    <div className="user-page">
      <Header className="user-page__head" withUserBlock={isMylistPage}>
        {isLoginPage && <PageTitle>Sign in</PageTitle>}
        {isMylistPage && (
          <PageTitle>
            My list <span className="user-page__film-count">{filmsCount}</span>
          </PageTitle>
        )}
      </Header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
