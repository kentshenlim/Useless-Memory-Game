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
          Select new Pokémon to get point. Don&#39;t select Pokémon chosen
          before!
        </p>
      </nav>
      <div className="card-table">
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
