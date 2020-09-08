module.exports = {
    ValidateHex(s) {
        var regExp = /^(0[xX])?([0-9A-Fa-f]+)$/;
        return (typeof s === 'string' && regExp.test(s));
    },
    Calculate(start, offset, names) {
        let splitNames = names.split('\n');

        let startInt = parseInt(start, 16);
        let offsetInt = parseInt(offset, 16);
        let workingInt = startInt;

        let s = '';
        for (let i = 0; i < splitNames.length; i++) {
            const name = splitNames[i];

            s += `${name}\n${workingInt.toString(16).toLowerCase().padStart(7, "0x00000")}`;
            workingInt += offsetInt;
            s += `\n${workingInt.toString(16).toLowerCase().padStart(7, "0x00000")}\n\n`;
        }
        s = s.slice(0, -1);
        return s;
    },
    SetShit(calculatedContent) {
        const hljs = require('highlight.js/lib/core');
        const javascript = require('highlight.js/lib/languages/javascript');
        hljs.registerLanguage('javascript', javascript);

        return hljs.highlight('javascript', calculatedContent);
    }
};
//export { Calculate, ValidateHex, SetShit };