import elementStyling from "./elementStyling.js";

export default function thumnail(parent,imgSrc,titleText,authorText,summaryText){
  const thumnailBox = document.createElement('div');
    thumnailBox.style.width="100%";
    thumnailBox.style.height="30%";
    thumnailBox.style.backgroundColor="white";
    thumnailBox.style.display="flex";
    thumnailBox.style.flexWrap="wrap";
    
    
//img추가
  const img = document.createElement("img"); 
    img.src= imgSrc;
    img.style.width="180px";
    thumnailBox.appendChild(img);

//textBox추가
  const textBox = document.createElement("div");  
    textBox.style.paddingLeft='15px';
    textBox.style.display="flex";
    textBox.style.flexDirection="column";
    textBox.style.justifyContent="end";
    
    textBox.style.width="500px";

    //title 추가
    const title = document.createElement("h1");
      title.innerHTML=titleText;
      textBox.appendChild(title);
      
    const author = document.createElement('p');
      author.innerHTML = authorText;
      author.style.fontSize="1em";
      textBox.appendChild(author);

    const summary = document.createElement('p');
      summary.innerHTML = summaryText;
      summary.style.fontSize=".5em";
      textBox.appendChild(summary);
  
  thumnailBox.appendChild(textBox);

    

  parent.appendChild(thumnailBox);
  
}