let display = document.getElementById('display'); // Asegúrate de definir 'display' antes de usarlo
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});
