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
  Login = 'login',
  Player = 'player',
  Film = 'films/:id',
  MyList = 'mylist',
  AddReview = 'films/:id/review'
}

export { sampleFilm, AppRoute };
