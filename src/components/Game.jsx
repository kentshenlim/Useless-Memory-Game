import PokemonCard from './PokemonCard';
import chingling from '../assets/img/chingling.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Game.css';

export default function Game({ setStatus, pokemonList, setPokemonList }) {
  console.log('game');
  const [selected, setSelected] = useState(new Set());

  function handleClickCard(id) {
    if (selected.has(id)) console.log('gg');
    else {
      const newArray = Array.from(selected);
      newArray.push(id);
      setSelected(new Set(newArray));
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
            Score&#58; <span>0</span>
          </div>
          <div>
            Best&#58; <span>0</span>
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
};
