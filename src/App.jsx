import './App.css';
import Ask from './components/Ask';
import Loading from './components/Loading';
import Game from './components/Game';
import Fireflies from './components/Fireflies';

function App() {
  return (
    <div className="app-wrapper">
      <Fireflies number={5} />
      {/* <Ask /> */}
      {/* <Loading /> */}
      <Game />
    </div>
  );
}

export default App;
