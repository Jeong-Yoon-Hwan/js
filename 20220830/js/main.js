import createElement from "./makeTag.js";
import { elementStyling, flexSet, mainStyle, rootStyle, article_centerStyling} from "./style.js";


//*root 선언
const root = document.getElementById('root');

root.innerHTML =`
  ${createElement("header")}
  ${createElement("main")}
  ${createElement("footer")}
`;

//* main 선언
const main = document.querySelector("#root > main");

main.innerHTML=`
  ${createElement("article")}
  ${createElement("article")}
  ${createElement("article")}
`;

//* article 선언
const article_left = document.querySelector("#root > main > article:nth-child(1)");
const article_center = document.querySelector("#root > main > article:nth-child(2)");
const article_right = document.querySelector("#root > main > article:nth-child(3)");

//* footer 선언
const footer = document.querySelector("#root > footer");

elementStyling(root,rootStyle); //* root 스타일링s
flexSet(root,'row','center','center');

elementStyling(main,mainStyle); //* main 스타일링
flexSet(main,'row','center','center');

elementStyling(article_center,article_centerStyling); //* article_cneter 스타일링
flexSet(article_center,'row','center','center');


