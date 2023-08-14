import './PopUp.css';
import PropTypes from 'prop-types';

export default function PopUp({ description, imgSrc, finalScore }) {
  return (
    <>
      <div className="pop-up-wrapper">
        <h4>{description}</h4>
        <img src={imgSrc} alt="Result image" />
        <p>{`Your final score is ${finalScore}`}</p>
        <div className="pop-up-buttons">
          <button>
            <ion-icon name="refresh-circle-outline"></ion-icon>
            <p>Play Again</p>
          </button>
          <button>
            <ion-icon name="close-circle-outline"></ion-icon>
            <p>Quit</p>
          </button>
        </div>
      </div>
      <div id="overlay"> </div>
    </>
  );
}

PopUp.propTypes = {
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  finalScore: PropTypes.number.isRequired,
};
