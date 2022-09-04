import { boxList, pokeAPI } from "./api.js";
import { slideBox } from "./main.js";



export default function nextEvent(){
  let shiftItem = boxList.shift();
  console.log(shiftItem);
  boxList.push(shiftItem);

  const liBox = document.querySelectorAll("ul > li > div");

  for(let i=0;i<boxList.length;i++){
    slideBox.appendChild(boxList[i]);
  }
}