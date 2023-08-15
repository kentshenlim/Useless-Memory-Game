import aSound from '../assets/audio/a.mp3';
import closeSound from '../assets/audio/close.wav';
import enterBuildingSound from '../assets/audio/enterBuilding.wav';
import errorSound from '../assets/audio/error.wav';
import levelUpSound from '../assets/audio/levelUp.wav';
import saveSound from '../assets/audio/save.wav';
import doorSound from '../assets/audio/door.wav';
import fleeSound from '../assets/audio/flee.wav';
import selectSound from '../assets/audio/select.wav';
import chingling from '../assets/audio/chingling.mp3';
import chimecho from '../assets/audio/chimecho.mp3';

const aSoundNode = new Audio(aSound);
const closeSoundNode = new Audio(closeSound);
const enterBuildingSoundNode = new Audio(enterBuildingSound);
const errorSoundNode = new Audio(errorSound);
const levelUpSoundNode = new Audio(levelUpSound);
const saveSoundNode = new Audio(saveSound);
const doorSoundNode = new Audio(doorSound);
const selectSoundNode = new Audio(selectSound);
const fleeSoundNode = new Audio(fleeSound);
const chinglingSoundNode = new Audio(chingling);
const chimechoSoundNode = new Audio(chimecho);

function playSound(node) {
  node.currentTime = 0;
  node.play();
}

const sound = {
  a: () => playSound(aSoundNode),
  close: () => playSound(closeSoundNode),
  enter: () => playSound(enterBuildingSoundNode),
  error: () => playSound(errorSoundNode),
  level: () => playSound(levelUpSoundNode),
  save: () => playSound(saveSoundNode),
  door: () => playSound(doorSoundNode),
  flee: () => playSound(fleeSoundNode),
  select: () => playSound(selectSoundNode),
  chingling: () => playSound(chinglingSoundNode),
  chimecho: () => playSound(chimechoSoundNode)
}

export default sound;
