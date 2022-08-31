
export function pokeAPI(){
  let pokeURL = "https://pokeapi.co/api/v2/pokemon";
  fetch(`${pokeURL}/1`)
  .then(response => response.json())
  .then(json => {
    console.dir(json);
  })
}
