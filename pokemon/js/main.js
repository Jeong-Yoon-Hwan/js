import createElement from "./makeTag.js";
import { elementStyling, flexSet, stylelist} from "./style.js";
import { pokeAPI } from "./api.js";

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
const article_prev = document.querySelector("#root > main > article:nth-child(1)");
const article_center = document.querySelector("#root > main > article:nth-child(2)");
const article_next = document.querySelector("#root > main > article:nth-child(3)");

//* next prev 화살표 아이콘 추가
article_next.innerHTML=`<span style="font-size:3em" class="material-symbols-outlined">arrow_forward_ios</span>`;
article_prev.innerHTML=`<span style="font-size:3em" class="material-symbols-outlined">arrow_back_ios</span>`

//*slideBox 생성
article_center.innerHTML=`${createElement("ul")}`;

//* slideBox 선언 (ul)
export const slideBox = document.querySelector("#root > main > article:nth-child(2) > ul");

export const slideList = document.querySelectorAll("#root > main > article:nth-child(2) > ul > div");
//* footer 선언
const footer = document.querySelector("#root > footer");



//======================================================================

elementStyling(root,stylelist.root); //* root 스타일링
flexSet(root,'row','center','center');

elementStyling(main,stylelist.main); //* main 스타일링
flexSet(main,'row','center','center');

elementStyling(article_center,stylelist.article_center); //* article_cneter 스타일링
flexSet(article_center,'row','center','center');

//* prev, next 스타일
elementStyling(article_prev,stylelist.article_prevNext);
flexSet(article_prev,'row','center','center');
elementStyling(article_next,stylelist.article_prevNext);
flexSet(article_next,'row','center','center');

elementStyling(slideBox,stylelist.slideBox); //* ul 스타일


//-------------------------------------------------------

pokeAPI(4);

const slidList = document.querySelector("#root > main > article:nth-child(2) > ul > li > div");

