import { useContext } from 'react';
import './Ask.css';
import PropTypes from 'prop-types';
import Unown from './Unown';
import a from '../assets/img/a.gif';
import c from '../assets/img/c.gif';
import e from '../assets/img/e.gif';
import t from '../assets/img/t.gif';
import SoundContext from './SoundContext';

const unownImg = [a, c, e, t];
const [aNode, cNode, eNode, tNode] = unownImg.map((imgSrc, idx) => (
  <Unown imgSrc={imgSrc} key={idx} /> // Will not change array during runtime, so accept idx as key
));

export default function Ask({ setStatus, difficulty, setDifficulty }) {
  const sound = useContext(SoundContext);
  function handleChangeDifficulty(e) {
    setDifficulty(e.target.value);
    sound.a();
  }

  function handleClickStart() {
    setStatus('loading');
    sound.enter();
  }

  function handleClickGitHub() {
    const url = 'https://github.com/kentshenlim/Useless-Memory-Game';
    window.open(url, '_blank');
    sound.door();
  }

  return (
    <main className="ask-main-wrapper">
      <div className="ask-title-wrapper">
        <div className="one-word">
          <span>C</span>
          {aNode}
          {tNode}
          <span>ch</span>
        </div>
        <div className="one-word">
          <span>&#39;</span>
          {eNode}
          <span>m</span>
        </div>
        <div className="one-word">
          <span>Re</span>
          {cNode}
          <span>all</span>
        </div>
      </div>
      <div className="ask-des-wrapper">
        <p>
          Embark on a Pokémon-themed memory challenge. Avoid repeating
          selections!
        </p>
      </div>
      <div className="ask-difficulty-wrapper">
        <div className="radio-wrapper">
          <input
            type="radio"
            id="easy"
            name="difficulty"
            value="easy"
            checked={difficulty === 'easy'}
            onChange={handleChangeDifficulty}
          />
          <label htmlFor="easy">Easy</label>
        </div>
        <div className="radio-wrapper">
          <input
            type="radio"
            id="medium"
            name="difficulty"
            value="medium"
            checked={difficulty === 'medium'}
            onChange={handleChangeDifficulty}
          />
          <label htmlFor="medium">Medium</label>
        </div>
        <div className="radio-wrapper">
          <input
            type="radio"
            id="hard"
            name="difficulty"
            value="hard"
            checked={difficulty === 'hard'}
            onChange={handleChangeDifficulty}
          />
          <label htmlFor="hard">Hard</label>
        </div>
      </div>
      <div className="ask-infos-wrapper">
        <button type="button" onClick={handleClickStart}>
          <ion-icon name="play-circle-outline"></ion-icon>
          <p>Start</p>
        </button>
        <button type="button" onClick={handleClickGitHub}>
          <ion-icon name="logo-github"></ion-icon>
          <p>GitHub</p>
        </button>
      </div>
    </main>
  );
}

Ask.propTypes = {
  setStatus: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};
