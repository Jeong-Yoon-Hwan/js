export default function makeTag(tagName,count){
  let element = [];
  for(let i=0;i<count;i++){
    element.push(`<${tagName}></${tagName}>`); 
  }
  return element.join("");
}