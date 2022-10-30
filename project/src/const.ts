const sampleFilm = {
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  meta: {
    genre: 'Drama',
    year: 2014,
  },
};

enum AppRoute {
  Root = '/',
  Login = '/login',
  Player = '/player',
  Film = '/films/:id',
  MyList = '/mylist',
  AddReview = '/films/:id/review'
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
enum PageTitles {
  Root = 'Главная страница',
  Login = 'Логин',
  Player = 'Плеер',
  Film = 'Фильм',
  MyList = 'Избранное',
  AddReview = 'Добавить отзыв',
  Page404 = 'Страница не найдена'
}
export { sampleFilm, AppRoute, AuthStatus, PageTitles };
