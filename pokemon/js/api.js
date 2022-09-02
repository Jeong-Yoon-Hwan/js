import { slideBox } from "./main.js";

function pokeObj(id,name){
  this.id = id;
  this.name = name;
}

export function pokeAPI(count){
  for(let i=0;i<count;i++){
    const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/${i+1}`;
    const request = new XMLHttpRequest();
      request.open("GET", _BASIC_URL);
      request.responseType = "json";
      request.send();
      request.addEventListener('load', () => {
        const _POKEMON_API = request.response;
        
        console.log(_POKEMON_API.name);
        let li = document.createElement("li");
        li.innerHTML=`<div></div>`;
        slideBox.appendChild(li);
      });
  }
}






