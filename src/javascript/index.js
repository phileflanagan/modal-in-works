const galleryItems = document.querySelectorAll('.gallery-item');
const closeBox = document.querySelector('.close-box');

const imageModal = document.querySelector('.image-modal');
const imageModalImage = image.modal.querySelector('img');
const imageModalTitle = image.modal.querySelector('h3');
const imageModalDesc = imageModal.querySelector('.desc');
const imageModalStyle = imageModal.querySelector('.desc-style');
const imageModalCatLink = imageModal.querySelector('.link-cat');

const images = [
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/HBr-100-Hendrick-ter-Brugghen-Allegory-of-Faith-1.png",
    name: "Hendrick ter Brugghen (1588-1629)",
    desc: "Allegory of Fath, ca. 162?",
    style: "Oil on canvas",
    catalogue: "#",
    bio: "#"
  },

  ]


function openModal(e) {
  imageModal.style.display = 'block';
}

function hideModal(e) {
  imageModal.style.display = 'none';
}

galleryItems.forEach((galleryItem, index) => {
  galleryItem.index = index;
  galleryItem.addEventListener('click', openModal);
});

closeBox.addEventListener('click', hideModal);
