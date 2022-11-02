import { ChangeEvent, FormEvent, Fragment, useState } from 'react';

const AddReviewForm = () => {
  const [formData, setFormData] = useState({
    'rating': '',
    'review-text': '',
  });
  const formSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    // eslint-disable-next-line no-console
    console.log(formData);
  };
  const onChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="add-review">
      <form className="add-review__htmlForm" onSubmit={formSubmitHandler}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, idx) => {
              const count = idx + 1;
              return (
                <Fragment key={count}>
                  <input
                    className="rating__input"
                    id={`star-${count}`}
                    type="radio"
                    name="rating"
                    value={count}
                    onChange={onChange}
                  />
                  <label className="rating__label" htmlFor={`star-${count}`}>
                    Rating {count}
                  </label>
                </Fragment>
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={onChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
