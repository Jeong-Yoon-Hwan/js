// export const makeTag = (parent,tagName,html) =>{
//   const tag = document.createElement(tagName);
//   tag.innerHTML = html;
//   parent.appendChild(tag);
// }

const createElement = (tagName)=>{
  if(typeof(tagName) === "string"){
    return `<${tagName}></${tagName}>`;
  }
}

export default createElement;

