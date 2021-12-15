function validateHex(s) {
  var regExp = /^(0[xX])?([0-9A-Fa-f]+)$/;
  return typeof s === 'string' && regExp.test(s);
}

function calculate(startHex, offsetHex, paddingHex, nameString, paddingSize) {
  const names = nameString.split('\n');

  const start = parseInt(startHex, 16);
  const offset = parseInt(offsetHex, 16);
  const padding = parseInt(paddingHex, 16);
  let workingInt = start;

  let output = '';
  for (let i = 0; i < names.length; i++) {
    output += `\n${names[i]}\n`;

    const first = padHex(workingInt.toString(16).toLowerCase(), paddingSize);
    output += `${first}\n`;

    workingInt += offset;

    const second = padHex(workingInt.toString(16).toLowerCase(), paddingSize);
    output += `${second}\n`;

    workingInt += padding;
  }

  return output.trimStart();
}

function padHex(string, size) {
  switch (size) {
    case 2:
      return string.padStart(4, '0x00');
    case 3:
      return string.padStart(5, '0x000');
    case 4:
      return string.padStart(6, '0x0000');
    case 5:
      return string.padStart(7, '0x00000');
    case 6:
      return string.padStart(8, '0x000000');
  }
}

function highlightOutput(calculatedContent) {
  const hljs = require('highlight.js/lib/core');
  const customlang = require('./customlang');

  hljs.registerLanguage('customlang', customlang);

  return hljs.highlight('customlang', calculatedContent);
}

module.exports = {
  validateHex,
  calculate,
  highlightOutput,
};
