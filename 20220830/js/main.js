import makeTag from "./makeTag.js";
import { elementStyling, flexSet, mainStyle, rootStyle} from "./style.js";


const root = document.getElementById('root'); //* root 선언
makeTag(root,'main',''); //* main 생성

const main = document.querySelector("#root > main"); //* main 선언
//*article 생성
for(let i=0;i<3;i++){
  makeTag(main,'article','');
}

elementStyling(root,rootStyle); //* root 스타일링
flexSet(root,'row','center','center');
elementStyling(main,mainStyle); //* main 스타일링


