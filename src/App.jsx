import './App.css';
import Ask from './components/Ask';
import Loading from './components/Loading';
import Game from './components/Game';
import Fireflies from './components/Fireflies';
import { useState } from 'react';

function App() {
  console.log('main');
  const [difficulty, setDifficulty] = useState('medium');

  return (
    <div className="app-wrapper">
      <Fireflies number={5} />
      <Ask difficulty={difficulty} setDifficulty={setDifficulty} />
      {/* <Loading /> */}
      {/* <Game /> */}
    </div>
  );
}

export default App;
