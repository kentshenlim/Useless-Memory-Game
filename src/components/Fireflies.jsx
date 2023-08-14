// Based on https://codepen.io/mikegolus/pen/Jegvym
import PropTypes from 'prop-types';
import './Fireflies.css';

export default function Fireflies({ number }) {
  const arrJSX = [];
  for (let i = 0; i < number; i++)
    arrJSX.push(<div className="firefly" key={i} />); // Array will not change between renders
  return <div className="fireflies-wrapper">{arrJSX}</div>;
}

Fireflies.propTypes = {
  number: PropTypes.number.isRequired,
  //   color: PropTypes.string.isRequired,
};
