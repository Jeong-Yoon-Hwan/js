function header(parent,...listName){
  const header = document.createElement("header");
    header.style.backgroundColor="lightyellow";
    header.style.width="inherit";
    header.style.height="5vh";
    header.style.display="flex";
    header.style.justifyContent="center";
    header.style.alignContent="center";
  const ul = document.createElement("ul");
    ul.style.display="flex";
    ul.style.gap ="5vw";
    ul.style.alignItems="center";
    header.appendChild(ul);
  
  ul.innerHTML=`${makeTag("li",...listName)}`;

  parent.appendChild(header);
}


function makeTag(tagName,...listName){ //인자를 배열로 받아옴
  const list = [...listName]; //받아온 배열 list에 저장
  const element = [];
  for(let i=0;i<list.length;i++){
    element.push(`<${tagName}>${list[i]}</${tagName}>`); 
  }
  return element.join("");
}


export default header;


