import { slideBox } from "./main.js";

function pokeObj(id,name){
  this.id = id;
  this.name = name;
}

export function pokeAPI(id){
  //for(let i=0;i<896;i++){
    const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const request = new XMLHttpRequest();
      request.open("GET", _BASIC_URL);
      request.responseType = "json";
      request.send();
      request.addEventListener('load', () => {
        const _POKEMON_API = request.response;
        
        console.log(_POKEMON_API.id);
        slideBox.innerHTML=`<li></li>`;
      });
  //}
}






