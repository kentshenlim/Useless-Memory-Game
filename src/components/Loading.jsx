import { useEffect } from 'react';
import './Loading.css';
import PropTypes from 'prop-types';
import fetchRequiredPokemon from '../utils/fetchRequiredPokemon';
import lapras from '../assets/img/lapras.gif';

const map = { easy: 4, medium: 8, hard: 12 }; // difficulty => fetch count

export default function Loading({ setStatus, difficulty, setPokemonList }) {
  const fetchCount = map[difficulty];

  useEffect(() => {
    let ignore = false;
    const fetchedIDUsed = new Set();
    const fetchAndSet = async () => {
      const res = await fetchRequiredPokemon(fetchCount, fetchedIDUsed);
      if (!ignore) {
        setPokemonList(res);
        setStatus('gaming');
      }
    };
    fetchAndSet();
    return () => (ignore = true);
  }, [setStatus, setPokemonList, fetchCount]);

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
  setPokemonList: PropTypes.func.isRequired,
};
