import makeTag from "./makeTag.js";
import domStyling from "./style.js";


import elementStyling from "./elementStyling.js";
//* root 생성
const root = document.getElementById('root');
root.innerHTML=`
  ${makeTag("header",1)}
  ${makeTag("main",1)}
`;

const header = document.querySelector("#root > header");  //* 헤더 선언
const main = document.querySelector("#root > main");      //* 메인 선언

main.innerHTML=`
  ${makeTag("article",3)}
`;

const articleLeft = document.querySelector("#root > main > article:nth-child(1)");
const articleCenter = document.querySelector("#root > main > article:nth-child(2)");
const articleRight = document.querySelector("#root > main > article:nth-child(3)");

articleLeft.innerHTML=`
  ${makeTag("section",3)}
`;
articleRight.innerHTML=`
  ${makeTag("section",2)}
`;

//* thumnailList에 article 안에 있는section 을 배열로 push 해서 저장했음.
const thumnailList = [];
for(let i=0;i<articleLeft.children.length;i++){
  thumnailList.push(articleLeft.children[i]);
}

let v =[root,header,main,articleLeft,articleCenter,articleRight];


//* thumnail 생성
for(let i=0;i<thumnailList.length;i++){
  thumnailList[i].innerHTML=`${makeTag("div",2)}`;
}

for(let i=0;i<articleRight.children.length;i++){
  thumnailList.push(articleRight.children[i]);  
}

console.log(thumnailList);


elementStyling(root,domStyling.root);
elementStyling(header,domStyling.header);
elementStyling(main,domStyling.main);
elementStyling(articleLeft,domStyling.articleLeft);
elementStyling(articleCenter,domStyling.articleCenter);
elementStyling(articleRight,domStyling.articleRight);

for(let i=0;i<thumnailList.length;i++){
  elementStyling(thumnailList[i],domStyling.thumnailBox);
}



