export function elementStyling(element, styleProps){
  for(const key in styleProps){
    element.style[key] = styleProps[key];
  }
}

export function flexSet(element,direction,justify,align){
  element.style.display="flex";
  element.style.direction=direction;
  element.style.justifyContent=justify;
  element.style.alignItems=align;
}

export const stylelist ={
  root : {
    width:"100vw",
    height:"100vh",
    backgroundColor:"beige"
  },
  main : {
    width: "100vw",
    height : "50vh",
    backgroundColor:"lightgray"
  },
  article_center :{
    width : "80vw",
    height : "50vh",
    backgroundColor : "white"
  },
  article_prevNext : {
    width : "10vw",
    height : "50vh",
    backgroundColor: "ligthgray",
    color:"gray"
  },
  slideBox : {
    width : "80vw",
    height : "40vh",
    backgroundColor:"gray"
  },
  slideList :{
    width : "10vw",
    height : "40vh",
    backgroundColor:"cadetblue"
  }
}

