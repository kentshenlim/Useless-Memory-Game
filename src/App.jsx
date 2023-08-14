import './App.css';
import Ask from './components/Ask';
import Loading from './components/Loading';
import Game from './components/Game';
import Fireflies from './components/Fireflies';
import { useState } from 'react';

function App() {
  console.log('main');
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'
  const [status, setStatus] = useState('asking'); // 'asking', 'loading', 'gaming'

  return (
    <div className="app-wrapper">
      <Fireflies number={5} />
      {status == 'asking' ? (
        <Ask
          setStatus={setStatus}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      ) : status == 'loading' ? (
        <Loading setStatus={setStatus} difficulty={difficulty} />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
