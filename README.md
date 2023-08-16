# Catch-'em-Recall

A Pokémon-based memory card game written using React and PokéAPI.

## Project Overview

- Project written to practice usage of React and API.
- [Demo](https://useless-memory-game.vercel.app/)

## Reflections

- Should have used flexbox for `.card-table`, instead of grid.
- Image loading issues. Should have made `Load` as a child of `Game`. The `Game`
  itself should fetch data, not `Load`, so that the `Game` can still display
  loading screen while images have not been loaded completely (using `onload`).
  Sibling relationship not viable; passing of HTML nodes as props is a bad
  practice. Check this
  [example](https://codesandbox.io/s/react-image-preload-ptosn).
- Should have kept typography stylings as global variables in base CSS, making
  media queries much easier, rather than scattering them throughout separate CSS
  files.
- Audio. Need to handle delay between click and audio playing. For mobile
  devices, sometimes audio not played.

## Credits

- [PokeAPI](https://pokeapi.co/)
- Features based on [Sharkri's pokememo](https://github.com/Sharkri/pokememo)
