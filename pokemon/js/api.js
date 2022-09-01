
function pokeObj(id,name){
  this.id = id;
  this.name = name;
}
const pokelist =[];
export function pokeAPI(){
  for(let i=0;i<896;i++){
    let pokeURL = "https://pokeapi.co/api/v2/pokemon";
    fetch(`${pokeURL}/${i+1}`)
    .then(response => response.json())
    .then(json => {
      //console.log(pokeURL);
      //console.log(json.id);
      pokelist.push(new pokeObj(json.id,json.name));
    }) 
  }
}

console.log(pokelist);
