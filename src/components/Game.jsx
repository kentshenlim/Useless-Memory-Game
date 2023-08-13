import PokemonCard from './PokemonCard';
import chingling from '../assets/img/chingling.svg';
import './Game.css';

export default function Game() {
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

      <div className="card-table">
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Crabominable"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/358.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
        <PokemonCard
          imgSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"
          nameStr="Voltorb"
        />
      </div>
    </div>
  );
}
