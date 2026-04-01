function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  if (modal && modalImg) {
    modal.style.display = 'block';
    modalImg.src = src;
  }
}
