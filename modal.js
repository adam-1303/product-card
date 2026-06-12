export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');

    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.#initOpen(buttonId);
    this.#initClose();
  }


  open() {
    this.modal.classList.add("modal-showed");  
    this.overlay.classList.add("overlay-showed")
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove('overlay-showed')
  }

  

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId)
    button.addEventListener('click', () => {
      this.open();
    })
  }
  
  #initClose() {
    const closeButton = this.modal.querySelector('.close-modal')
    closeButton.addEventListener('click', () => {
      this.close();
    })
    
    this.overlay.addEventListener("click", () => {
      if (this.shouldCloseOnOverlay === true) {
        this.close();
      }
    });
  }
  
}