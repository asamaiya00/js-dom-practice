const modal = document.querySelector('#modal-container');
document.querySelector('button').addEventListener('click', () => {
  modal.classList.add('show');
});
document.querySelector('i').addEventListener('click', () => {
  modal.classList.remove('show');
});
