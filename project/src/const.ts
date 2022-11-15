enum AppRoute {
  Root = '/',
  Login = '/login',
  Player = '/player/:id',
  Film = '/films/:id',
  MyList = '/mylist',
  AddReview = '/films/:id/review',
}

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
export { AppRoute, AuthStatus, PageTitles };
