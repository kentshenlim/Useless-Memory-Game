import { nanoid } from "nanoid";

async function fetchOnePokemonNameURL(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const response = await fetch(url);
  const result = await response.json();
  console.log('test2');
  return {
    id: nanoid(),
    name: result.name,
    imgSrc:
      result.sprites.versions['generation-v']['black-white'].animated
        .front_default,
  };
}

async function fetchRequiredPokemon(fetchCount, fetchedIDUsed) {
  const result = new Array(fetchCount);
  for (let i = 0; i < fetchCount; i += 1) {
    let id = Math.floor(Math.random() * 493) + 1;
    while (fetchedIDUsed.has(id) || id == 386) id = Math.floor(Math.random() * 493) + 1;
    fetchedIDUsed.add(id);
    result[i] = fetchOnePokemonNameURL(id);
  }
  const finalRes = await Promise.all(result);
  console.log('test1')
  return finalRes;
}

export default fetchRequiredPokemon;