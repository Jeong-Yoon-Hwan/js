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


export const rootStyle= {
  width:"100vw",
  height:"100vh",
  backgroundColor:"beige"
}
export const mainStyle = {
  width: "100vw",
  height : "80vh",
  backgroundColor:"black"
}
//elementStyling(main,mainStyle,"");
