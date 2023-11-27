import { openFormModal } from "./form.js";

//Gallery
const productsArray = ["milk.jpg", "Drugs.jpg", "FatOwl.jpg", "halfBurger.jpg"];

const baseUrl = "./assets/images/";

const app = document.getElementById("app");

export const gallery = document.getElementById("image-gallery");
gallery.classList.add("product-gallery");

export const createImageGallery = () => {
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
    galleryFooter.innerHTML = "<h3>Product text</h3>";

    const galleryPrice = document.createElement("p");
    galleryPrice.innerHTML = "$10.99";
    galleryFooter.appendChild(galleryPrice);

    const galleryButton = document.createElement("button");
    galleryButton.classList.add("button-gallery");
    galleryButton.innerHTML = "Add to cart";
    galleryFooter.appendChild(galleryButton);

    galleryFigure.appendChild(galleryFooter);

    const openImageModal = () => {
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

    galleryButton.addEventListener("click", openFormModal);
    galleryImage.addEventListener("click", openImageModal);
  });
};

createImageGallery();
