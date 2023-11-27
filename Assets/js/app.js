//Gallery
const productsArray = [
  "milk.jpg",
  "Drugs.jpg",
  "FatOwl.jpg",
  "halfBurger.jpg",
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

    const openFormModal = () => {
        const modalWindow = document.createElement("form");
        modalWindow.classList.add("gallery-form");
        const fieldSet = document.createElement("fieldset");

        const fNameLabel = document.createElement("label");
        fNameLabel.textContent = "Enter your first name";
        const fName = document.createElement("input");
        fName.setAttribute("type", "text");
        fName.setAttribute("placeholder", "First Name");

        const lNameLabel = document.createElement("label");
        lNameLabel.textContent = "Enter your last name";
        const lName = document.createElement("input");
        lName.setAttribute("type", "text");
        lName.setAttribute("placeholder", "Last Name");

        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Enter your email";
        const email = document.createElement("input");
        email.setAttribute("type", "email");
        email.setAttribute("placeholder", "Email");

        const phoneLabel = document.createElement("label");
        phoneLabel.textContent = "Enter your phone number";
        const phone = document.createElement("input");
        phone.setAttribute("type", "tel");
        phone.setAttribute("placeholder", "Phone Number");

        const messageLabel = document.createElement("label");
        messageLabel.textContent = "Enter your message";
        const message = document.createElement("textarea");
        message.setAttribute("placeholder", "Message");

        const submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        submitButton.classList.add("button-gallery");
        submitButton.textContent = "Send message";

        
        fieldSet.appendChild(fNameLabel);
        fieldSet.appendChild(fName);

        fieldSet.appendChild(lNameLabel);
        fieldSet.appendChild(lName);

        fieldSet.appendChild(emailLabel);
        fieldSet.appendChild(email);

        fieldSet.appendChild(phoneLabel);
        fieldSet.appendChild(phone);

        fieldSet.appendChild(messageLabel);
        fieldSet.appendChild(message);

        fieldSet.appendChild(submitButton);

        gallery.innerHTML = "";
        modalWindow.appendChild(fieldSet);
        gallery.appendChild(modalWindow);
    }

    galleryButton.addEventListener("click", openFormModal);
    galleryImage.addEventListener("click", openImageModal);
  });
};

createImageGallery();