import './PokemonCard.css';
import PropTypes from 'prop-types';

export default function PokemonCard({ imgSrc, nameStr, handleClick }) {
  return (
    <div className="pokemon-card-wrapper" onClick={handleClick}>
      <img src={imgSrc}></img>
      <p>{nameStr}</p>
    </div>
  );
}

PokemonCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  nameStr: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
