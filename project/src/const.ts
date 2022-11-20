const DEFAULT_NAME_GENRE = 'All genres';

const RouteName = {
  Player: 'player',
  Films: 'films',
  Review: 'review',
} as const;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Player: `/${RouteName.Player}/:id`,
  Film: `/${RouteName.Films}/:id`,
  MyList: '/mylist',
  AddReview: `/${RouteName.Films}/:id/${RouteName.Review}`,
  ErrorPage: '/page404',
} as const;

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
enum PageTitles {
  Root = 'Главная страница',
  Login = 'Логин',
  Player = 'Плеер',
  Film = 'Фильм',
  MyList = 'Избранное',
  AddReview = 'Добавить отзыв',
  Page404 = 'Страница не найдена',
}

enum APIRoute {
  Films = '/films',
}
export { DEFAULT_NAME_GENRE, RouteName, AppRoute, AuthStatus, PageTitles, APIRoute };
