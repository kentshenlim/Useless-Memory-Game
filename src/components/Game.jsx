import { useState, useContext } from 'react';
import './Game.css';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import chingling from '../assets/img/chingling.svg';
import shuffle from '../utils/shuffle';
import SoundContext from './SoundContext';

export default function Game({
  setStatus,
  pokemonList,
  setPokemonList,
  score,
  setScore,
  bestScore,
  setBestScore,
}) {
  console.log('game');
  const sound = useContext(SoundContext);
  const [selected, setSelected] = useState(new Set());

  function handleClickCard(id) {
    if (selected.has(id)) {
      sound.error();
      setStatus('gameOver');
    } else {
      const newArray = Array.from(selected);
      newArray.push(id);
      setSelected(new Set(newArray));
      setScore((score) => score + 1);
      setBestScore((bestScore) => {
        if (bestScore == score) return 1 + bestScore; // Snapshot same
        return bestScore;
      });
      if (selected.size === pokemonList.length - 1) {
        sound.level();
        setStatus('gameWon');
      } else {
        sound.save();
        setPokemonList(shuffle(pokemonList)); // Game continues
      }
    }
  }

  const arrJSX = pokemonList.map((obj) => (
    <PokemonCard
      key={obj.id}
      imgSrc={obj.imgSrc}
      nameStr={obj.name}
      handleClick={() => handleClickCard(obj.id)}
    />
  ));

  return (
    <div className="game-wrapper">
      <nav className="game-navbar">
        <button className="audio-toggler">
          <img src={chingling} alt="Chingling audio toggler" />
        </button>
        <p>
          Choose new Pokémon to earn points. Avoid selecting previously chosen
          ones!
        </p>
      </nav>

      <div className="game-progress">
        <div className="score-wrapper">
          <div>
            Score&#58; <span>{score}</span>
          </div>
          <div>
            Best&#58; <span>{bestScore}</span>
          </div>
        </div>
        <div className="rem-count">
          <span>Remaining&#58; </span>
          <span>{pokemonList.length - selected.size}</span>&#47;
          <span>{pokemonList.length}</span>
        </div>
      </div>

      <div className="card-table">{arrJSX}</div>
    </div>
  );
}

Game.propTypes = {
  setStatus: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
  setPokemonList: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  bestScore: PropTypes.number.isRequired,
  setBestScore: PropTypes.func.isRequired,
};
