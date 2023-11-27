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

        const xBtn = document.createElement("span");
        xBtn.classList.add("x-btn");
        xBtn.innerHTML = "&times;";

        const createLabel = (text) => {
          const label = document.createElement("label");
          label.textContent = text;
          return label;
        }
        
        const createInput = (type, placeholder) => {
          const input = document.createElement("input");
          input.setAttribute("type", type);
          input.setAttribute("placeholder", placeholder);
          return input;
        }

        const createInputButton = (type, className, text) => {
          const inputBtn = document.createElement("input");
          inputBtn.setAttribute("type", type);
          inputBtn.classList.add(className);
          inputBtn.textContent = text;
          return inputBtn;
        }

        const fNameLabel = createLabel("Enter your first name");
        const fName = createInput("text", "First Name");

        const lNameLabel = createLabel("Enter your last name");
        const lName = createInput("text", "Last Name");

        const emailLabel = createLabel("Enter your email");
        const email = createInput("email", "Email");

        const phoneLabel = createLabel("Enter your phonenumber");
        const phone = createInput("tel", "Phonenumber");

        const messageLabel = createLabel("Enter your message");
        const message = createInput("textarea", "Message");

        const submitButton = createInputButton("submit", "button-gallery", "Send message");

        const validateInput = (input, regEx) => {
          const trimmedValue = input.value.trim();
          const isValid = regEx.test(trimmedValue);

          if (isValid) {
            input.classList.add("valid");
          }
          else {
            input.classList.add("invalid");
          }

          return isValid;
        }

        const formValidation = (e) => {
          e.preventDefault();
          const nameRegExp = /^[a-zA-Z]{2,17}$/
          const emailRegExp = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
          const phoneRegExp = /^[0-9]{8,12}$/
          const messageRegExp = /^[\s\S]{0,150}$/

          const isFNameValid = validateInput(fName, nameRegExp);
          const isLNameValid = validateInput(lName, nameRegExp);

          const isEmailValid = validateInput(email, emailRegExp);
          const isPhoneValid = validateInput(phone, phoneRegExp);
          const isMessageValid = validateInput(message, messageRegExp);
          
          if (isFNameValid && isLNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            console.log("Form is valid");
          }
          else {
            console.log("There's a error in the form");
          }
        }

        submitButton.addEventListener("click", formValidation);
        const resetButton = createInputButton("reset", "reset-button", "reset");

        const appendChildren = (parent, elements) => {
          elements.forEach(element => {
            parent.appendChild(element);
          });
        };

        appendChildren(fieldSet, [
          xBtn,
          fNameLabel,
          fName,
          lNameLabel,
          lName,
          emailLabel,
          email,
          phoneLabel,
          phone,
          messageLabel,
          message,
          submitButton,
          resetButton
        ]);

        gallery.innerHTML = "";
        modalWindow.appendChild(fieldSet);
        gallery.appendChild(modalWindow);
    }

    galleryButton.addEventListener("click", openFormModal);
    galleryImage.addEventListener("click", openImageModal);
  });
};

createImageGallery();