import aSound from '../assets/audio/a.mp3';
import closeSound from '../assets/audio/close.wav';
import enterBuildingSound from '../assets/audio/enterBuilding.wav';
import errorSound from '../assets/audio/error.wav';
import levelUpSound from '../assets/audio/levelUp.wav';
import saveSound from '../assets/audio/save.wav';
import doorSound from '../assets/audio/door.wav';
import selectSound from '../assets/audio/select.wav';

const aSoundNode = new Audio(aSound);
const closeSoundNode = new Audio(closeSound);
const enterBuildingSoundNode = new Audio(enterBuildingSound);
const errorSoundNode = new Audio(errorSound);
const levelUpSoundNode = new Audio(levelUpSound);
const saveSoundNode = new Audio(saveSound);
const doorSoundNode = new Audio(doorSound);
const selectSoundNode = new Audio(selectSound);

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
  select: () => playSound(selectSoundNode)
}

export default sound;
