import { slideBox } from "./main.js";



export const boxList =[];
export function pokeAPI(count){
  for(let i=0;i<count;i++){
    const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/${i+1}`;
    const request = new XMLHttpRequest();
      request.open("GET", _BASIC_URL);
      request.responseType = "json";
      request.send();
      request.addEventListener('load', () => {
        const _POKEMON_API = request.response;
        
        //console.log(_POKEMON_API.name);
        let li = document.createElement("li");
        
        let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
        li.innerHTML=`<div style="width:300px;height:300px;background-color:white"><img style="width:150px"src='${pokeImg}'</div>`;
        boxList.push(li);

            
        for(let i=0;i<boxList.length;i++){
          boxList[i].style.display="flex";
          boxList[i].style.justifyContent="center";
          boxList[i].style.alignItems="center";
        }
        slideBox.appendChild(boxList[i]);
      });
      
  }
}






