(function () {
  const { BrowserWindow } = require('electron').remote
  var maximized = false;
  function init() {
    window.shit = ' ';
    window.padSize = 5;

    document.getElementById(`size${window.padSize}`).classList.add('is-active');

    document.getElementById('copy-button').addEventListener('click', function (e) {
      var successIcon = document.getElementById('copy-success-icon');
      copyToClipboard(window.shit);
      successIcon.className = 'fas fa-check copy-success-icon visible';
      setTimeout(() => {
        successIcon.className = 'fas fa-check copy-success-icon hidden';
      }, 1000);
    });

    document.getElementById('about-button').addEventListener('click', function (e) {
      document.getElementById('about-modal').classList.toggle('is-active');
    });

    document.getElementById('min-button').addEventListener('click', function (e) {
      var window = BrowserWindow.getFocusedWindow();
      window.minimize();
    });

    document.getElementById('max-button').addEventListener('click', function (e) {
      var window = BrowserWindow.getFocusedWindow();
      if (maximized) {
        window.unmaximize();
        document.getElementById('max-button-icon').className = 'far fa-window-maximize';
        maximized = false;
      } else {
        window.maximize();
        document.getElementById('max-button-icon').className = 'far fa-window-restore';
        maximized = true;
      }
    });

    document.getElementById('close-button').addEventListener('click', function (e) {
      var window = BrowserWindow.getFocusedWindow();
      window.close();
    });
  };

  document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
      init();
    }
  };

})();