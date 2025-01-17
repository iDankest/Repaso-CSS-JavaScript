let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});
