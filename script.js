const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
  }
  

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

 // Optional: keyboard support
 document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      e.preventDefault();
      calculate();
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });