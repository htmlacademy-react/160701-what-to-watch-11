import './index.css';

type TLoader = {
  isTransparent?: boolean;
};
const Loader = ({ isTransparent }: TLoader) => (
  <div className={`loader ${isTransparent ? 'loader--transparent' : ''}`}>
    <div className="lds-spinner">
      {Array.from({ length: 12 }, (_, idx) => (
        <div key={String(idx)} />
      ))}
    </div>
  </div>
);

export default Loader;
