import PokemonCard from './PokemonCard';
import chingling from '../assets/img/chingling.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Game.css';

export default function Game({ setStatus, pokemonList, setPokemonList }) {
  console.log('game');
  const arrJSX = pokemonList.map((obj) => (
    <PokemonCard key={obj.id} imgSrc={obj.imgSrc} nameStr={obj.name} />
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
          <span>0</span>&#47;<span>10</span>
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
