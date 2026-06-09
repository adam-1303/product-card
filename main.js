// import "./script.js";
import "./homework-11.js"
// import "./homework-10.js"
// import "./homework-9.js";
// import "./homework-8.js";
// import "./homework-7.js";
// import "./homework-6.js";
// import "./homework-5.js";
// import "./product-card.js";
// import "./comments.js";
// import { Modal } from "./modal.js";
// import { Form } from "./form.js";

const registrationForm = new Form('registrationForm');
const modal = new Modal('modal');

const openBtn = document.querySelector('.footer__register-btn');
openBtn.addEventListener('click', () => {
  modal.open();
});

registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (registrationForm.validateForm()) {
    const data = registrationForm.getValuesForm();

    console.log('USER:', data);

    modal.close();

    registrationForm.resetForm();
  }
});
