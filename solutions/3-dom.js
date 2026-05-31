// BEGIN
let content = document.body.innerHTML;
content = content.trim();
const lines = content.split('\n');
const paragraphs = lines
  .map(line => line.trim())
  .filter(line => line.length > 0)
  .map(line => `<p>${line}</p>`);
document.body.innerHTML = paragraphs.join('\n');
// END