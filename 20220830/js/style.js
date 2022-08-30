export function elementStyling(element, styleProps, textContent = ""){
  for(const key in styleProps){
    element.style[key] = styleProps[key];
  }
  element.textContent = textContent;
}


const mainStyle = {
  backgroundColor : "#333",
  width : "100vw",
  height : "80vh"
}

const rootStyle = {
  backgroundColor : "beige"
}
