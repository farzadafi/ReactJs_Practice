export const ElementGenerator = ({ element, child, restAttrs = {}, eventListener, ...rest }) => {
  const elem = document.createElement(element)
  for (const key in rest) {
    elem[key] = rest[key]
  }
  for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key])
  }
  if (child) Array.isArray(child) ? elem.append(...child) : elem.append(child)
  if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback))
  }
  return elem
}
