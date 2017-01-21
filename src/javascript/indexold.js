var galleryItems = document.querySelectorAll('.gallery-item');
var closeBox = document.querySelector('.close-box');

var imageModal = document.querySelector('.image-modal');
var imageModalImage = imageModal.querySelector('img');
var imageModalTitle = imageModal.querySelector('h3');
var imageModalDesc = imageModal.querySelector('.desc');
var imageModalStyle = imageModal.querySelector('.desc-style');
var imageModalCatLink = imageModal.querySelector('.link-cat');
var imageModalBioLink = imageModal.querySelector('.link-bio');

var images = [
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
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/JL-102-Jan-Lievens-The-Card-Players.jpg",
    name: "Jan Lievens (1607-1674)",
    desc: "Card Players, ca. 1925",
    style: "Oil on canvas",
    catalogue: "#",
    bio: "#"
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/RR-104-Rembrandt-van-Rijn-Young-Girl-in-a-Gold-trimmed-Cloak.jpg",
    name: "Rembrandt van Rinj (1606-1669)",
    desc: "Young Girl in a Gold-Trimmed Cloak, 1632",
    style: "Oil on panel, oval",
    catalogue: "#",
    bio: "#"
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/FH-100-Frans-Hals-Portrait-of-Samuel-Ampzing-1.png",
    name: "Frans Hals (1576-1666)",
    desc: "Portrait of Samuel Ampzing, ca. 1630",
    style: "Oil on copper",
    catalogue: "#",
    bio: "#"
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/JS-116-Jan-Steen-The-Prayer-Before-the-Meal-1.png",
    name: "Jan Steen (1685-1750)",
    desc: "The Prayer Before the Meal, 1660",
    style: "Oil on oak panel",
    catalogue: "#",
    bio: "#"
  },
  {
    image: "http://leidencollectionexhibition.com/wp-content/uploads/2017/01/FM-122-Frans_van_Mieris-A_Traveler_at_Rest-1.png",
    name: "Frans van Mieris (1566-1625)",
    desc: "A Traveler at Rest, ca. 1657",
    style: "Oil on copper",
    catalogue: "#",
    bio: "#"
  }
];

function openModal(e) {
  var curr = images[this.index];
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

galleryItems.forEach(function (galleryItem, index) {
  galleryItem.index = index;
  galleryItem.addEventListener('click', openModal);
});

closeBox.addEventListener('click', hideModal);
