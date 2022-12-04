import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks';
import { addCommentFilmAction } from 'src/store/api-actions';

type TAddReviewForm = {
  backgroundColor: string;
};

enum FormFieldName {
  Rating = 'rating',
  Text = 'review-text',
}

const AddReviewForm = ({ backgroundColor }: TAddReviewForm) => {
  const { id: currentFilmId } = useParams();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    [FormFieldName.Rating]: 0,
    [FormFieldName.Text]: '',
  });
  const formSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();

    if (currentFilmId) {
      dispatch(
        addCommentFilmAction({
          filmId: Number(currentFilmId),
          comment: formData[FormFieldName.Text],
          rating: formData[FormFieldName.Rating],
        }),
      );
    }
  };
  const onChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = evt.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const isValid = !!(formData[FormFieldName.Rating] && formData[FormFieldName.Text]);

  return (
    <div className="add-review">
      <form className="add-review__htmlForm" onSubmit={formSubmitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, idx) => idx + 1)
              .reverse()
              .map((count) => {
                const isCurrent = count === Number(formData.rating);

                return (
                  <Fragment key={count}>
                    <input
                      className="rating__input"
                      id={`star-${count}`}
                      type="radio"
                      name={FormFieldName.Rating}
                      value={count}
                      onChange={onChange}
                      checked={isCurrent}
                    />
                    <label className="rating__label" htmlFor={`star-${count}`}>
                      Rating {count}
                    </label>
                  </Fragment>
                );
              })}
          </div>
        </div>

        <div className="add-review__text" style={{ backgroundColor }}>
          <textarea
            className="add-review__textarea"
            name={FormFieldName.Text}
            id={FormFieldName.Text}
            placeholder="Review text"
            onChange={onChange}
            value={formData[FormFieldName.Text]}
            minLength={50}
            maxLength={400}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isValid}>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
