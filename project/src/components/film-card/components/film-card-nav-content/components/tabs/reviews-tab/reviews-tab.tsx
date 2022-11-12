import reviews from 'src/mocks/reviews';
import { TFilm } from 'src/types/films';
import { HumanizeDate } from 'src/utils/date';
import { adjustColor } from 'src/utils/main';

const ReviewsTab = ({ film: { backgroundColor } }: { film: TFilm }) => {
  const getReviews = (start = 0, end = 0) =>
    reviews.slice(start, end).map((review) => {
      const {
        id,
        comment,
        rating,
        date,
        user: { name },
      } = review;

      return (
        <div className="review" key={id} style={{ borderColor: adjustColor(backgroundColor, 10) }}>
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{name}</cite>
              <time className="review__date" dateTime={HumanizeDate.CommentDateTime(date)}>
                {HumanizeDate.Comment(date)}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      );
    });
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">{getReviews(0, 3)}</div>
      <div className="film-card__reviews-col">{getReviews(3, 6)}</div>
    </div>
  );
};

export default ReviewsTab;
