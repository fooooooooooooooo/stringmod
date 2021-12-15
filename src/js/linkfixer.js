const { shell } = require('electron');
if (document.readyState != 'complete') {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      prepareTags();
    },
    false
  );
} else {
  prepareTags();
}

function prepareTags() {
  aTags = document.getElementsByTagName('a');
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].href.includes('http')) {
      aTags[i].setAttribute(
        'onclick',
        `shell.openExternal(\\"${aTags[i].href}\\")`
      );
      aTags[i].href = '#';
    }
  }
  return false;
}
