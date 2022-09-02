
const createElement = (tagName)=>{
  if(typeof(tagName) === "string"){
    return `<${tagName}></${tagName}>`;
  }
}


export default createElement;

