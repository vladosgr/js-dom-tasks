// BEGIN
export default function extractData(rootElement) {
  const paragraphs = rootElement.querySelectorAll('p');
  const data = Array.from(paragraphs).map(p => p.textContent.trim());
  return data;
}
// END