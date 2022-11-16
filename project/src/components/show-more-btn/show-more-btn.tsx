type TShowMoreBtn = {
  onClick: () => void;
};

const ShowMoreBtn = ({ onClick }: TShowMoreBtn) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={onClick}>
      Show more
    </button>
  </div>
);

export default ShowMoreBtn;
