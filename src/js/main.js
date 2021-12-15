const { BrowserWindow } = require('electron').remote;
let maximized = false;

function init() {
  window.shit = ' ';
  window.padSize = 5;

  addEventListeners();

  document.getElementById(`size-${window.padSize}`).classList.add('is-active');
}

document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    init();
  }
};

function addEventListeners() {
  const copyButton = document.getElementById('copy-button');
  copyButton.addEventListener('click', () => {
    const successIcon = document.getElementById('copy-success-icon');
    copyToClipboard(window.output);
    successIcon.className = 'fas fa-check copy-success-icon visible';
    setTimeout(() => {
      successIcon.className = 'fas fa-check copy-success-icon hidden';
    }, 1000);
  });

  const aboutButton = document.getElementById('about-button');
  aboutButton.addEventListener('click', () => {
    document.getElementById('about-modal').classList.toggle('is-active');
  });

  const minButton = document.getElementById('min-button');
  minButton.addEventListener('click', () => {
    const window = BrowserWindow.getFocusedWindow();
    window.minimize();
  });

  const maxButton = document.getElementById('max-button');
  maxButton.addEventListener('click', () => {
    const window = BrowserWindow.getFocusedWindow();
    if (maximized) {
      window.unmaximize();
      document.getElementById('max-button-icon').className =
        'far fa-window-maximize';
      maximized = false;
    } else {
      window.maximize();
      document.getElementById('max-button-icon').className =
        'far fa-window-restore';
      maximized = true;
    }
  });

  const closeButton = document.getElementById('close-button');
  closeButton.addEventListener('click', () => {
    const window = BrowserWindow.getFocusedWindow();
    window.close();
  });
}
