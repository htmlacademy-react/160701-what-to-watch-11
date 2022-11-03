const adjustColor = (dataColor: string, amount: number) =>
  `#${dataColor
    .replace(/^#/, '')
    .replace(/../g, (color) =>
      `0${Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)}`.substr(-2),
    )}`;
export { adjustColor };
