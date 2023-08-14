import aSound from '../assets/audio/a.mp3';

const aSoundNode = new Audio(aSound);
function playASound() {
  aSoundNode.currentTime = 0;
  aSoundNode.play();
}

const sound = {a: playASound}

export default sound;
