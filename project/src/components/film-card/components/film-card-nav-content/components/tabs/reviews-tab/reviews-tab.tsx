import reviews from 'src/mocks/reviews';
import { TFilm } from 'src/types/films';
import { adjustColor } from 'src/utils/main';

const ReviewsTab = ({ film: { backgroundColor } }: { film: TFilm }) => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {reviews.slice(0, 6).map((review) => {
        const {
          id,
          comment,
          rating,
          date,
          user: { name },
        } = review;

        return (
          <div
            className="review"
            key={id}
            style={{ borderColor: adjustColor(backgroundColor, 10) }}
          >
            <blockquote className="review__quote">
              <p className="review__text">{comment}</p>

              <footer className="review__details">
                <cite className="review__author">{name}</cite>
                <time className="review__date" dateTime={date}>
                  {date}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{rating}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default ReviewsTab;
