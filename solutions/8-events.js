export default () => {
  // BEGIN
const button = document.getElementById('alert-generator');
const alertsContainer = document.querySelector('.alerts');
let counter = 1;
button.addEventListener('click', () => {
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-primary');
  alert.textContent = `Alert ${counter}`;
  alertsContainer.prepend(alert);
  counter++;
});
  // END
};