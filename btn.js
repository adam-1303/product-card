import { Modal } from "./Modal.js"

const button = document.querySelector('.button')
const closeButton = document.querySelector('.close-modal')

const registrationModal = new Modal('reg-modal', 'reg-button', true);
const authModal = new Modal('auth-modal', 'auth-button', true);
