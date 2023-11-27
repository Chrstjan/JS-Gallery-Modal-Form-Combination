
//Gallery
const productsArray = [
  "milk.jpg",
  "Drugs.jpg",
  "FatOwl.jpg",
  "halfBurger.jpg",
  "Minecraft.jpg",
];

const baseUrl = "./assets/images/";

const app = document.getElementById("app");

const gallery = document.getElementById("image-gallery");
gallery.classList.add("product-gallery");

const createImageGallery = () => {
    productsArray.forEach((img) => {
    const galleryFigure = document.createElement("figure");
    galleryFigure.classList.add("gallery-figure");

    const galleryHeader = document.createElement("header");
    galleryHeader.classList.add("product-text");
    galleryHeader.innerHTML = "<h2>Product Name</h2>";
    galleryFigure.appendChild(galleryHeader);

    const galleryImage = document.createElement("img");
    const galleryImageSrc = baseUrl + img;
    galleryImage.src = galleryImageSrc;

    gallery.appendChild(galleryFigure);
    galleryFigure.appendChild(galleryImage);

    const galleryFooter = document.createElement("figcaption");
    galleryFooter.classList.add("product-text");
    galleryFooter.innerHTML = "<p>Product text</p>";
    galleryFigure.appendChild(galleryFooter);

    const openModal = () => {
      const modalWindow = document.createElement("figure");
      modalWindow.classList.add("modal-image");
      gallery.innerHTML = "";
      modalWindow.appendChild(galleryImage);
      gallery.appendChild(modalWindow);

      modalWindow.addEventListener("click", () => {
        gallery.innerHTML = "";
        createImageGallery();
      });
    };
    galleryImage.addEventListener("click", openModal);
  });
};

createImageGallery();