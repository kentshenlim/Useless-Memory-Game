import './Unown.css';
import PropTypes from 'prop-types';

export default function Unown({ imgSrc }) {
  return (
    <div className="unown-wrapper">
      <img src={imgSrc} alt="Unown letter representation" />
    </div>
  );
}

Unown.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};
