const modals = document.querySelectorAll('.modal');
const modalBackgrounds = document.querySelectorAll('.modal-background');

if (modals.length > 0) {
  modalBackgrounds.forEach((element) => {
    element.addEventListener('click', function (e) {
      closeModals();
    });
  });
}

const closeModalButton = document.getElementById('close-modal');
closeModalButton.addEventListener('click', function (e) {
  closeModals();
});

function closeModals() {
  modals.forEach(function (el) {
    el.classList.remove('is-active');
  });
}

document.addEventListener('keydown', function (event) {
  let e = event || window.event;
  if (e.key === 'Esc' || e.key === 'Escape') {
    closeModals();
  }
});
