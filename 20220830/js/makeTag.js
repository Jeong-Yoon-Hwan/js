const makeTag = (parent,tagName,html) =>{
  const tag = document.createElement(tagName);
  tag.innerHTML = html;
  parent.appendChild(tag);
}

export default makeTag;