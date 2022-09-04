import makeTag from "./makeTag.js";
import domStyling from "./style.js";
import thumnail from "./thumnail.js";
import trainingData from "./data.js";
import header from "./header.js";

const imgCat = "./image/cat.jpg";
const imgGorilla = "./image/gorilla.jpg";
const imgLion = "./image/lion.jpg";
const imgLion2 = "./image/lion-2.jpg";


import elementStyling from "./elementStyling.js";
//* root 생성
const root = document.getElementById('root');

header(root,"home","menu","market");  //li태그 생성

const main = document.createElement("main");
root.appendChild(main);

main.innerHTML=`
  ${makeTag("article",3)}
`;

const articleLeft = document.querySelector("#root > main > article:nth-child(1)");
const articleCenter = document.querySelector("#root > main > article:nth-child(2)");
const articleRight = document.querySelector("#root > main > article:nth-child(3)");


articleCenter.innerHTML=`
  ${makeTag("div",1)}
`;  
const arrowButton = document.querySelector("#root > main > article:nth-child(2) > div");
arrowButton.innerHTML=`<span style="font-size:80px" class="material-symbols-outlined">arrow_right</span>`;


//* 스타일링-------------------
elementStyling(root,domStyling.root);
//elementStyling(header,domStyling.header);
elementStyling(main,domStyling.main);
elementStyling(articleLeft,domStyling.articleLeft);
elementStyling(articleCenter,domStyling.articleCenter);
elementStyling(articleRight,domStyling.articleRight);



//thumnail
thumnail(articleLeft,imgCat,trainingData.thumnailData[0].title,trainingData.thumnailData[0].author,trainingData.thumnailData[0].summary);

thumnail(articleLeft,imgGorilla,trainingData.thumnailData[1].title,trainingData.thumnailData[1].author,trainingData.thumnailData[1].summary);

thumnail(articleLeft,imgLion,trainingData.thumnailData[2].title,
trainingData.thumnailData[2].author,trainingData.thumnailData[2].summary);

thumnail(articleRight,imgLion2,trainingData.thumnailData[3].title,trainingData.thumnailData[3].author,trainingData.thumnailData[3].summary);




