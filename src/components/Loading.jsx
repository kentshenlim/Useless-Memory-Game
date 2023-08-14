import lapras from '../assets/img/lapras.gif';
import './Loading.css';
import PropTypes from 'prop-types';

export default function Loading({ setStatus, difficulty }) {
  const map = { easy: 6, medium: 10, hard: 14 }; // difficulty => fetch count
  const fetchCount = map[difficulty];
  const fetchedIDUsed = new Set();

  async function fetchOnePokemonNameURL(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(url);
    const result = await response.json();
    return {
      name: result.name,
      imgSrc:
        result.sprites.versions['generation-v']['black-white'].animated
          .front_default,
    };
  }

  async function fetchRequiredPokemon() {
    const result = new Array(fetchCount);
    for (let i = 0; i < fetchCount; i += 1) {
      let id = Math.floor(Math.random() * 493) + 1;
      while (fetchedIDUsed.has(id)) id = Math.floor(Math.random() * 493) + 1;
      fetchedIDUsed.add(id);
      result[i] = fetchOnePokemonNameURL(id);
    }
    await Promise.all(result);
    console.log(result);
    return result;
  }

  return (
    <main className="loading-wrapper">
      <img src={lapras} alt="Lapras loading" />
      <div>
        <span>Fetching other Pokémon </span>
        <div className="loading-dots">
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
      </div>
    </main>
  );
}

Loading.propTypes = {
  setStatus: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
};
