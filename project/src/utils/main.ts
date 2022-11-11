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

export { adjustColor, getFilmRatingPhrase };
