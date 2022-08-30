import makeTag from "./makeTag.js";
import { elementStyling, flexSet, mainStyle, rootStyle} from "./style.js";

//root 선언
const root = document.getElementById('root');
makeTag(root,'main','');

const main = document.querySelector("#root > main");

console.dir(root);


elementStyling(root,rootStyle);
elementStyling(main,mainStyle); 
//  elementStyling(root,{
//   width:"100vw",
//   height:"100vh",
//   backgroundColor:"beige"
//  },"");

//  elementStyling(main,{
//   width:"100px",
//   height:"100px",
//   backgroundColor:"black"
//  },"");

