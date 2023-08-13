import PokemonCard from './PokemonCard';
import './Game.css';

export default function Game() {
  return (
    <div className="game-wrapper">
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
