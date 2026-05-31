import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('input[data-autocomplete]');
  
  inputs.forEach(input => {
    const autocompleteUrl = input.dataset.autocomplete;
    const name = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${name}"]`);
    
    if (!list) return;
    
    input.addEventListener('input', async (e) => {
      const searchValue = e.target.value;
      
      const url = new URL(autocompleteUrl, window.location.origin);
      url.searchParams.set('search', searchValue);
      
      try {
        const response = await fetch(url.toString());
        const data = await response.json();
        
        list.innerHTML = '';
        
        if (data.length === 0) {
          const li = document.createElement('li');
          li.textContent = 'Nothing';
          list.appendChild(li);
        } else {
          data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
          });
        }
      } catch (error) {
        console.error('Error fetching autocomplete data:', error);
        list.innerHTML = '<li>Nothing</li>';
      }
    });
  });
  // END
};
