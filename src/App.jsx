import './App.css';
import Ask from './components/Ask';
import Loading from './components/Loading';
import Game from './components/Game';
import Fireflies from './components/Fireflies';
import { useState } from 'react';

function App() {
  console.log('app');
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [status, setStatus] = useState('asking'); // 'asking', 'loading', 'gaming', 'gameWon', 'gameOver'
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="app-wrapper">
      <Fireflies number={8} />
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
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      )}
    </div>
  );
}

export default App;
