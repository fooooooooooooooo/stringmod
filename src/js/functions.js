const { clipboard } = require('electron');
const utils = require('./utils');

const startInput = document.getElementById('start-input');
const offsetInput = document.getElementById('offset-input');
const paddingInput = document.getElementById('padding-input');
const namesInput = document.getElementById('names-input');
const calculateButton = document.getElementById('calculate-button');

const size2 = document.getElementById('size-2');
const size3 = document.getElementById('size-3');
const size4 = document.getElementById('size-4');
const size5 = document.getElementById('size-5');
const size6 = document.getElementById('size-6');

const sizes = [size2, size3, size4, size5, size6];

const output = document.getElementById('output');

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

  if (document.body.classList.contains('dark')) {
    themeButton.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  }

  if (document.body.classList.contains('light')) {
    themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

sizes.forEach((element, i) => {
  element.addEventListener('click', () => {
    const size = i + 2;
    changeSize(size);
  });
});

startInput.addEventListener('input', (e) => {
  handleHexFieldChange(e);
});

offsetInput.addEventListener('input', (e) => {
  handleHexFieldChange(e);
});

paddingInput.addEventListener('input', (e) => {
  handleHexFieldChange(e);
});

namesInput.addEventListener('input', handleNamesChange);

calculateButton.addEventListener('click', calculate);

function changeSize(size) {
  sizes[window.padSize - 2].classList.remove('is-active');
  sizes[size - 2].classList.add('is-active');
  window.padSize = size;
}

function calculate() {
  const start = startInput.value;
  const offset = offsetInput.value;
  const padding = paddingInput.value;
  const names = namesInput.value;

  const result = utils.calculate(start, offset, padding, names, window.padSize);
  window.output = result;
  const formatted = utils.highlightOutput(result);

  console.log(formatted);
  output.innerHTML = `<code class='hljs javascript'>${formatted.value}</code>`;
}

function handleHexFieldChange(event) {
  const input = event.target;

  if (!utils.validateHex(input.value)) {
    input.className = 'input is-danger';
  } else if (input.value.charAt(1) === 'X') {
    input.className = 'input is-warning';
  } else {
    input.className = 'input';
  }
}

function handleNamesChange(event) {
  const input = event.target;

  input.style.height = 'auto';

  if (parseInt(input.scrollHeight) > 0) {
    input.style.height = namesInput.scrollHeight + 2 + 'px';
  } else {
    input.style.height = '0px';
  }
}

function copyToClipboard(string) {
  clipboard.writeText(string);
}
