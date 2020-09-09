// Get all modals on the page that aren't hoverable.
const modals = document.querySelectorAll('.modal');
const modalBackgrounds = document.querySelectorAll('.modal-background');
if (modals.length > 0) {
    // If user clicks outside modal, close it.
    modalBackgrounds.forEach(element => {
        element.addEventListener('click', function (e) {
            closemodals();
        });
    });

}

/*
 * Close modals by removing `is-active` class.
 */
function closemodals() {
    modals.forEach(function (el) {
        el.classList.remove('is-active');
    });
}

// Close modals if ESC pressed
document.addEventListener('keydown', function (event) {
    let e = event || window.event;
    if (e.key === 'Esc' || e.key === 'Escape') {
        closemodals();
    }
});