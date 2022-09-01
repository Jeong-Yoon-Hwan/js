export function elementStyling(element, styleProps){
  if(typeof(element==="object")&& typeof(styleProps==="object")){
    for(const key in styleProps){
      element.style[key] = styleProps[key];
    }
  }
}

export function flexSet(element,direction,justify,align){
  element.style.display="flex";
  element.style.direction=direction;
  element.style.justifyContent=justify;
  element.style.alignItems=align;
}

export const stylelist ={
  root :  {
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
    backgroundColor : "white",
    overflow:"hidden",
    position:"relative"
  },
  article_prevNext : {
    width : "10vw",
    height : "50vh",
    backgroundColor: "ligthgray",
    color:"gray"
  },
  slideBox : {
    width : "max-content",
    height : "40vh",
    backgroundColor:"gray",
    gap : "10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    left:"-10px"
    
  },
  slideList :{
    width : "10vw",
    height : "40vh",
    backgroundColor:"cadetblue"
  }
}

