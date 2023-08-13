import lapras from '../assets/img/lapras.gif';
import './Loading.css';

export default function Loading() {
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
