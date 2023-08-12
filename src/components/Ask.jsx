import Unown from './Unown';
import a from '../assets/img/a.gif';
import c from '../assets/img/c.gif';
import e from '../assets/img/e.gif';
import t from '../assets/img/t.gif';
import './Ask.css';

export default function Ask() {
  const titleImg = [a, c, e, t];
  const [aNode, cNode, eNode, tNode] = titleImg.map((imgSrc, idx) => (
    <Unown imgSrc={imgSrc} key={idx} /> // Will not change array during runtime, so accept idx as key
  ));
  return (
    <main className="ask-main-wrapper">
      <div className="ask-title-wrapper">
        <div className="one-word">
          <span>C</span>
          {aNode}
          {tNode}
          <span>ch</span>
        </div>
        <div className="one-word">
          {eNode}
          <span>m</span>
        </div>
        <div className="one-word">
          <span>re</span>
          {cNode}
          <span>all</span>
        </div>
      </div>
    </main>
  );
}
