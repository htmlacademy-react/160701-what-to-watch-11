import { internet, name, datatype } from 'faker';
import { TFilm, TFilmComment } from 'src/types/films';
import { UserData } from 'src/types/user-data';

export const makeFakeUserData = (): UserData => ({
  id: datatype.number(),
  email: internet.email(),
  token: datatype.uuid(),
  avatarUrl: internet.avatar(),
  name: name.title(),
});

export const makeFakeFilm = (): TFilm => ({
  name: 'A Star Is Born',
  posterImage: 'https://11.react.pages.academy/static/film/poster/A_Star_Is_Born.jpg',
  previewImage: 'https://11.react.pages.academy/static/film/preview/A_Star_Is_Born.jpg',
  backgroundImage: 'https://11.react.pages.academy/static/film/background/A_Star_is_Born.jpg',
  backgroundColor: '#C4C0C0',
  description:
    'A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',
  rating: 3.9,
  scoresCount: 244484,
  director: 'Bradley Cooper',
  starring: ['Lady Gaga', 'Bradley Cooper', 'Sam Elliott'],
  runTime: 136,
  genre: 'Drama',
  released: 2018,
  id: datatype.number(),
  isFavorite: datatype.boolean(),
  videoLink: 'https://11.react.pages.academy/static/film/video/bubbles.mp4',
  previewVideoLink: 'https://11.react.pages.academy/static/film/video/traffic.mp4',
});
export const makeFakeFilmsArray = (number = 10) => Array.from({ length: number }, makeFakeFilm);

export const makeFakeComment = (): TFilmComment => ({
  id: datatype.number(),
  user: {
    id: datatype.number(),
    name: name.title(),
  },
  rating: 5.3,
  comment:
    'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
  date: '2022-10-03T13:58:46.523Z',
});

export const makeFakeCommentsArray = (number = 10) =>
  Array.from({ length: number }, makeFakeComment);
