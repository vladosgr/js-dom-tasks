import escapeHtml from 'escape-html';

// BEGIN
export default function handleFormSubmit() {
  const form = document.querySelector('form');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Получаем значения напрямую через элементы формы
    const email = form.querySelector('[name="email"]')?.value || '';
    const name = form.querySelector('[name="name"]')?.value || '';
    const comment = form.querySelector('[name="comment"]')?.value || '';
    
    // Экранируем данные
    const escapedEmail = escapeHtml(email);
    const escapedName = escapeHtml(name);
    const escapedComment = escapeHtml(comment);
    
    // Создаем новый элемент
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${escapedEmail}</div>
      <div>Name: ${escapedName}</div>
      <div>Comment: ${escapedComment}</div>
    `;
    
    // Заменяем форму на результат
    form.replaceWith(resultDiv);
  });
}
// END