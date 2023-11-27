import { gallery, createImageGallery } from "./app.js";

export const openFormModal = () => {
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
  };

  const createInput = (type, placeholder) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    return input;
  };

  const createInputButton = (type, className, text) => {
    const inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", type);
    inputBtn.classList.add(className);
    inputBtn.textContent = text;
    return inputBtn;
  };

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

  const submitButton = createInputButton(
    "submit",
    "button-gallery",
    "Send message"
  );

  const validateInput = (input, regEx) => {
    const trimmedValue = input.value.trim();
    const isValid = regEx.test(trimmedValue);

    if (isValid) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }

    return isValid;
  };

  const formValidation = (e) => {
    e.preventDefault();
    const nameRegExp = /^[a-zA-Z]{2,17}$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    const phoneRegExp = /^[0-9]{8,12}$/;
    const messageRegExp = /^[\s\S]{0,150}$/;

    const isFNameValid = validateInput(fName, nameRegExp);
    const isLNameValid = validateInput(lName, nameRegExp);

    const isEmailValid = validateInput(email, emailRegExp);
    const isPhoneValid = validateInput(phone, phoneRegExp);
    const isMessageValid = validateInput(message, messageRegExp);

    if (
      isFNameValid &&
      isLNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isMessageValid
    ) {
      gallery.innerHTML = "";
      const recivedMessage = document.createElement("div");
      recivedMessage.classList.add("recived-message");

      const h2 = document.createElement("h2");
      h2.textContent =
        "Thank you for your inquiry. We'll get back to you as soon as possible!";
      recivedMessage.appendChild(h2);

      const closeBtn = document.createElement("span");
      closeBtn.innerHTML = "&times;";
      closeBtn.classList.add("x-btn");
      closeBtn.addEventListener("click", () => {
        gallery.innerHTML = "";
        createImageGallery();
      });

      recivedMessage.appendChild(closeBtn);

      gallery.appendChild(recivedMessage);

      createImageGallery();
    } else {
      console.log("There's a error in the form");
    }
  };

  submitButton.addEventListener("click", formValidation);
  const resetButton = createInputButton("reset", "reset-button", "reset");

  const appendChildren = (parent, elements) => {
    elements.forEach((element) => {
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
    resetButton,
  ]);

  gallery.innerHTML = "";
  modalWindow.appendChild(fieldSet);
  gallery.appendChild(modalWindow);

  xBtn.addEventListener("click", () => {
    gallery.innerHTML = "";
    createImageGallery();
  });
};
