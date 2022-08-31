
export function pokeAPI(count){
  let pokeURL = "https://pokeapi.co/api/v2/pokemon";
  fetch(`${pokeURL}/${count}`)
  .then(response => response.json())
  .then(json => {
    console.log(json);
   
  })
}
