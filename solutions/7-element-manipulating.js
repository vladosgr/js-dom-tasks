import camelCase from 'lodash/camelCase';

// BEGIN
const toCamelCase = (str) => 
  str.split('-')
    .map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
export default function normalize(document) {
  const elements = document.body.getElementsByTagName('*');
  for (const element of elements) {
    for (const className of Array.from(element.classList)) {
      if (className.includes('-')) {
        element.classList.replace(className, toCamelCase(className));
      }
    }
  }
}
// END