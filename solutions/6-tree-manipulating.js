// BEGIN
export default function prettify(document) {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    const textNodes = [];
    div.childNodes.forEach(node => {
      if (node instanceof Text && node.textContent.trim().length > 0) {
        textNodes.push(node);
      }
    });
    textNodes.forEach(textNode => {
      const p = document.createElement('p');
      p.textContent = textNode.textContent;
      textNode.replaceWith(p);
    });
  });
}
// END