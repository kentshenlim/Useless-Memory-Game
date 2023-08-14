// Reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export default function shuffle(array) {
  const res = [...array];
  let currentIndex = res.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [res[currentIndex], res[randomIndex]] = [res[randomIndex], res[currentIndex]];
  }

  return res;
}