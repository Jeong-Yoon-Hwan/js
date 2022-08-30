import createElement from "./makeTag.js";
import { elementStyling, flexSet, mainStyle, rootStyle} from "./style.js";


const root = document.getElementById('root');

root.innerHTML =`
  ${createElement("header")}
  ${createElement("main")}
  ${createElement("footer")}
`;

const main = document.querySelector("#root > main");


const footer = document.querySelector("#root > footer");

elementStyling(root,rootStyle); //* root 스타일링
flexSet(root,'row','center','center');
elementStyling(main,mainStyle); //* main 스타일링


