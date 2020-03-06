const addContentToDiv = (divClass, ...content) => {
  content.forEach(element => {
    const newElement = document.createElement(element[0])
    const divNode = document.getElementsByClassName(divClass)
    if (!element[1] && (typeof element[2] === 'string')) {
      newElement.innerHTML += element[2]
      divNode[divNode.length - 1].appendChild(newElement)
    } else if (element[1] && (typeof element[2] === 'string')) {
      setAttributes(newElement, element[1])
      newElement.innerHTML += element[2]
      divNode[divNode.length - 1].appendChild(newElement)
    } else if (!element[1] && (typeof element[2] === 'object')) {
      setAttributes(newElement, element[2])
      divNode[divNode.length - 1].appendChild(newElement)
    } else if (element[1] && (typeof element[2] === 'object')) {
      setAttributes(newElement, element[2])
      newElement.innerHTML += element[1]
      document.getElementById('content').appendChild(newElement)
    }
  })
}

const createChildDiv = (parentID, newClass, newID) => {
  const newChild = document.createElement('div')
  if (newClass) newChild.className = newClass
  if (newID) newChild.id = newID
  document.getElementById(parentID).appendChild(newChild)
}

const createContent = (parent, newClass, newID, ...content) => {
  const newDiv = document.createElement('div')
  newDiv.className = newClass
  if (newID) newDiv.id = newID
  const parentDiv = document.querySelectorAll(parent)
  parentDiv[parentDiv.length - 1].appendChild(newDiv)
  addContentToDiv(newClass, ...content)
}

const setAttributes = (element, attributes) => {
  // Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
  Object.entries(attributes).forEach(args => element.setAttribute(...args))
}

export { addContentToDiv, createChildDiv, createContent }
