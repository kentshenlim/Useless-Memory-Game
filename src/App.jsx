import { useState, useRef, useEffect } from 'react';
import './App.css';
import chingling from './assets/img/chingling.svg';
import chimecho from './assets/img/chimecho.svg';
import trolling from './assets/img/trolling.gif';
import crying from './assets/img/crying.gif';
import Ask from './components/Ask';
import Loading from './components/Loading';
import Game from './components/Game';
import PopUp from './components/PopUp';
import Fireflies from './components/Fireflies';
import sound from './utils/sound';
import SoundContext from './components/SoundContext';
import forestTheme from './assets/audio/forest_theme_normal.mp3';

function App() {
  console.log('app');
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [status, setStatus] = useState('asking'); // 'asking', 'loading', 'gaming', 'gameWon', 'gameOver'
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [bgm, setBgm] = useState(forestTheme);
  const [isMuted, setIsMuted] = useState(true);

  function handleClickAudioToggler() {
    setIsMuted(!isMuted);
    if (isMuted) sound.chimecho();
    else sound.chingling();
  }

  const bgmNode = useRef(null);

  useEffect(() => {
    const audioNode = bgmNode.current;
    if (isMuted) {
      audioNode.pause();
      audioNode.currentTime = 0;
    } else audioNode.play();
  }, [isMuted]);

  return (
    <div className="app-wrapper">
      <SoundContext.Provider value={sound}>
        <Fireflies number={8} />
        <audio src={bgm} loop={true} ref={bgmNode}></audio>
        <button
          className="audio-toggler"
          type="button"
          onClick={handleClickAudioToggler}
        >
          <img src={isMuted ? chimecho : chingling} alt="Audio-toggler" />
        </button>
        {status == 'asking' ? (
          <Ask
            setStatus={setStatus}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        ) : status == 'loading' ? (
          <Loading
            setStatus={setStatus}
            difficulty={difficulty}
            setPokemonList={setPokemonList}
          />
        ) : (
          <Game
            setStatus={setStatus}
            pokemonList={pokemonList}
            setPokemonList={setPokemonList}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        )}
        {status === 'gameWon' && (
          <PopUp
            description="Pika-BOO! Well done!"
            imgSrc={trolling}
            finalScore={score}
            status={status}
            setStatus={setStatus}
            setScore={setScore}
          />
        )}
        {status === 'gameOver' && (
          <PopUp
            description="Gray tears, bright determination. Retry and conquer!"
            imgSrc={crying}
            finalScore={score}
            status={status}
            setStatus={setStatus}
            setScore={setScore}
          />
        )}
      </SoundContext.Provider>
    </div>
  );
}

export default App;
