
export default function buttonEvent(event){
  const articleRight = document.querySelector("#root > main > article:nth-child(3)");
  const articleLeft = document.querySelector("#root > main > article:nth-child(1)");
  articleRight.style.opacity=0;
  articleRight.style.transition=".5s";
  articleLeft.style.width="100vw";
  
}