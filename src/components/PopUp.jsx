import { useContext } from 'react';
import './PopUp.css';
import PropTypes from 'prop-types';
import SoundContext from './SoundContext';

export default function PopUp({
  description,
  imgSrc,
  finalScore,
  status,
  setStatus,
  setScore,
}) {
  const sound = useContext(SoundContext);
  function handleClickHome() {
    sound.close();
    setStatus('asking');
    if (status === 'gameOver') setScore(0);
  }

  function handleClickPlayAgain() {
    sound.select();
    setStatus('loading'); // Game demounted, hence reloading all Pokemon
    if (status === 'gameOver') setScore(0);
  }

  return (
    <>
      <div className="pop-up-wrapper">
        <h4>{description}</h4>
        <img src={imgSrc} alt="Result image" />
        <p>{`Your final score is ${finalScore}`}</p>
        <div className="pop-up-buttons">
          <button type="button" onClick={handleClickPlayAgain}>
            <ion-icon name="refresh-circle-outline"></ion-icon>
            <p>Play Again</p>
          </button>
          <button type="button" onClick={handleClickHome}>
            <ion-icon name="home-outline"></ion-icon>
            <p>Home</p>
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
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};
