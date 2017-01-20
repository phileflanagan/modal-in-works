const galleryItems = document.querySelectorAll('.gallery-item');
const imageModal = document.querySelector('.image-modal');
const closeBox = document.querySelector('.close-box');

function openModal(e) {
  imageModal.style.display = 'block';
}

function hideModal(e) {
  imageModal.style.display = 'none';
}

galleryItems.forEach(galleryItem => {
  galleryItem.addEventListener('click', openModal);
});

closeBox.addEventListener('click', hideModal);
