/*
Language: customlang
Description: highlights hex for stringmod.
Author: fooooooooooooooo <http://github.com/fooooooooooooooo>
Website: http://github.com/fooooooooooooooo/stringmod
Category: common
*/

function customlang(hljs) {
  return {
    name: 'customlang',
    contains: [
      {
        className: 'number',
        begin: '^(0[xX])([0-9A-Fa-f]+)$',
        end: '\\n',
      },
    ],
  };
}
module.exports = customlang;
