import { useState, useRef, useEffect } from 'react';
import './App.css';
import './media.css';
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
import forestThemeBrilliant from './assets/audio/forest_theme_brilliant.mp3';

function App() {
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [status, setStatus] = useState('asking'); // 'asking', 'loading', 'gaming', 'gameWon', 'gameOver'
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const previousBestScore = localStorage.getItem('catchEmRecall_bestScore');
    if (previousBestScore === null) return 0;
    return +previousBestScore;
  });
  const [isMuted, setIsMuted] = useState(true);

  function handleClickAudioToggler() {
    setIsMuted(!isMuted);
    if (isMuted)
      sound.chimecho(); // Currently muted, icon is chimecho for unmute
    else sound.chingling();
  }

  const bgmNode = useRef(null); // For direct DOM manipulation for audio

  useEffect(() => {
    const audioNode = bgmNode.current;
    if (isMuted) {
      audioNode.pause();
      audioNode.currentTime = 0;
    } else audioNode.play();
  }, [isMuted, status]); // Might need to replay another song when status changed

  useEffect(() => {
    localStorage.setItem('catchEmRecall_bestScore', `${bestScore}`);
  }, [bestScore]);

  return (
    <div className="app-wrapper">
      <SoundContext.Provider value={sound}>
        <Fireflies number={8} />
        <audio
          src={status == 'asking' ? forestTheme : forestThemeBrilliant}
          loop={true}
          ref={bgmNode}
        ></audio>
        <button
          className={
            'audio-toggler' + (isMuted && status === 'asking' ? ' ringing' : '')
          }
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
