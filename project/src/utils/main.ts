const adjustColor = (dataColor: string, amount: number) =>
  `#${dataColor
    .replace(/^#/, '')
    .replace(/../g, (color) =>
      `0${Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)}`.substr(-2),
    )}`;

const getFilmRatingPhrase = (rating: number) => {
  const FilmRate = {
    0: 'Bad',
    3: 'Normal',
    5: 'Good',
    8: 'Very good',
    10: 'Awesome',
  } as const;

  const phrase = Object.entries(FilmRate).reduce((acc, [key, value]) => {
    if (rating >= Number(key)) {
      return value;
    }
    return acc;
  }, '');

  return phrase;
};

const validateEmail = (email: string) =>
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
const validatePassword = (password: string) =>
  /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{2,16}$/.test(password.trim());

export { adjustColor, getFilmRatingPhrase, validateEmail, validatePassword };
