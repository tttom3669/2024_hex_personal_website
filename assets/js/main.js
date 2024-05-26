menuCollapseHandler();
modalHandler();
function menuCollapseHandler() {
  const menuBtn = document.querySelector(`[data-id="menu-btn"]`);
  const menuContent = document.querySelector(`[data-id="menu-content"]`);
  menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('grid-rows-0');
    menuContent.classList.toggle('grid-rows-1');
    menuContent.classList.toggle('opacity-0');
  });
}

function modalHandler() {
  const modalLink = document.querySelector(`[data-id="modal-link"]`);
  const modal = document.querySelector(`[data-id="modal"]`);
  const body = document.querySelector('body');
  const modalClose = document.querySelector(`[data-id="modal-close"]`);
  const modalContent = document.querySelector(`[data-id="modal-content"]`);
  const collapseModal = () => {
    modal.classList.toggle('h-0');
    modal.classList.toggle('h-dvh');
    modalContent.classList.toggle('opacity-0');
    modalContent.classList.toggle('translate-y-1/2');

    body.classList.toggle('overflow-hidden');
  };
  modalLink.addEventListener('click', (e) => {
    e.preventDefault();
    collapseModal();
  });
  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    collapseModal();
  });
}
