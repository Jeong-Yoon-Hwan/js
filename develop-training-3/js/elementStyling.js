export default function elementStyling(element, styleProps){
  if(typeof(element==="object")&& typeof(styleProps==="object")){
    for(const key in styleProps){
      element.style[key] = styleProps[key];
    }
  }
}