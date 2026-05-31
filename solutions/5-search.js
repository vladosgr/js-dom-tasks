export default (document) => {
  // BEGIN
  const categoryTitle = document.querySelector('.content h1').textContent.trim();
  const categoryDescription = document.querySelector('.description').textContent.trim();
  const articleElements = document.querySelectorAll('.links > div');
  const items = Array.from(articleElements).map(article => {
    const title = article.querySelector('h2 a').textContent.trim();
    const description = article.querySelector('p').textContent.trim();
    return { title, description };
  });
  return {
    title: categoryTitle,
    description: categoryDescription,
    items: items
  };
  // END
};
