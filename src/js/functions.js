function size2() {
  changeSize(2);
}
function size3() {
  changeSize(3);
}
function size4() {
  changeSize(4);
}
function size5() {
  changeSize(5);
}
function size6() {
  changeSize(6);
}

function changeSize(size) {
  document
    .getElementById(`size${window.padSize}`)
    .classList.remove('is-active');
  document.getElementById(`size${size}`).classList.add('is-active');
  window.padSize = size;
}

function closeAboutModal() {
  document.getElementById('about-modal').classList.toggle('is-active');
}

function calculateShit() {
  const utils = require('./utils');

  var start = document.getElementById('StartHex').value;
  var offset = document.getElementById('OffsetHex').value;
  var names = document.getElementById('NamesInput').value;

  var output = document.getElementById('output');

  window.shit = utils.calculate(start, offset, names, window.padSize);
  const fuck = utils.setShit(window.shit);

  console.log(window.shit);
  output.innerHTML = `<code class='hljs javascript'>${fuck.value}</code>`;
}

function handleStartChange() {
  const utils = require('./utils');

  var start = document.getElementById('StartHex');

  if (!utils.validateHex(start.value)) {
    start.className = 'input is-danger';
  } else if (event.target.value.charAt(1) === 'X') {
    start.className = 'input is-warning';
  } else {
    start.className = 'input';
  }
}

function handleOffsetChange() {
  const utils = require('./utils');

  var offset = document.getElementById('OffsetHex');

  if (!utils.validateHex(offset.value)) {
    offset.className = 'input is-danger';
  } else if (event.target.value.charAt(1) === 'X') {
    offset.className = 'input is-warning';
  } else {
    offset.className = 'input';
  }
}

function handleNamesChange() {
  var namesInput = document.getElementById('NamesInput');

  namesInput.style.height = 'auto';

  if (parseInt(namesInput.scrollHeight) < 500) {
    namesInput.style.height = namesInput.scrollHeight + 2 + 'px';
  } else {
    namesInput.style.height = '500px';
  }
}

function copyToClipboard(string) {
  const { clipboard } = require('electron');
  clipboard.writeText(string);
}
