import PropTypes from 'prop-types';
import './PokemonCard.css';

export default function PokemonCard({ imgSrc, nameStr }) {
  return (
    <div className="pokemon-card-wrapper">
      <img src={imgSrc}></img>
      <p>{nameStr}</p>
    </div>
  );
}

PokemonCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  nameStr: PropTypes.string.isRequired,
};
