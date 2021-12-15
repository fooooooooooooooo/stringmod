module.exports = {
  validateHex(s) {
    var regExp = /^(0[xX])?([0-9A-Fa-f]+)$/;
    return typeof s === 'string' && regExp.test(s);
  },
  calculate(start, offset, names, paddingSize) {
    let splitNames = names.split('\n');

    let startInt = parseInt(start, 16);
    let offsetInt = parseInt(offset, 16);
    let workingInt = startInt;

    let s = '';
    for (let i = 0; i < splitNames.length; i++) {
      const name = splitNames[i];

      s += `${name}\n${module.exports.padShit(
        workingInt.toString(16).toLowerCase(),
        paddingSize
      )}`;
      workingInt += offsetInt;
      s += `\n${module.exports.padShit(
        workingInt.toString(16).toLowerCase(),
        paddingSize
      )}\n\n`;
    }
    s = s.slice(0, -1);
    return s;
  },
  padShit(string, size) {
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
  },
  setShit(calculatedContent) {
    const hljs = require('highlight.js/lib/core');
    const customlang = require('./customlang');

    hljs.registerLanguage('customlang', customlang);

    return hljs.highlight('customlang', calculatedContent);
  },
};
