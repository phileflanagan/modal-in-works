const galleryItems = document.querySelectorAll('.gallery-item');
const closeBox = document.querySelector('.close-box');

const imageModal = document.querySelector('.image-modal');
const imageModalImage = imageModal.querySelector('img');
const imageModalTitle = imageModal.querySelector('h3');
const imageModalDesc = imageModal.querySelector('.desc');
const imageModalStyle = imageModal.querySelector('.desc-style');
const imageModalCatLink = imageModal.querySelector('.link-cat');
const imageModalBioLink = imageModal.querySelector('.link-bio');

const images = [
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/HBr-100-Hendrick-ter-Brugghen-Allegory-of-Faith-1.png",
    name: "Hendrick ter Brugghen (1588-1629)",
    desc: "Allegory of Fath, ca. 162?",
    style: "Oil on canvas",
    catalogue: "#",
    bio: "#"
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/JL-105-Jan-Lievens-Self-Portrait.jpg",
    name: "Jan Lievens (1607-1674)",
    desc: "Self-Portrait",
    style: "Oil on panel",
    catalogue: "#",
    bio: "#"
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/GD-108-Gerrit-Dou-Cat-Crouching-on-the-Ledge.jpg",
    name: "Gerrit Dou (1613-1674)",
    desc: "Cat crouching on the Ledge of an Artist's Atelier, 1657",
    style: "Oil on panel",
    catalogue: "#",
    bio: "#"
  }
]


function openModal(e) {
  const curr = images[this.index];
  imageModalImage.src = curr.image;
  imageModalTitle.innerHTML = curr.name;
  imageModalDesc.innerHTML = curr.desc;
  imageModalStyle.innerHTML = curr.style;
  imageModalCatLink.href = curr.catalogue;
  imageModalBioLink.href = curr.bio;
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
