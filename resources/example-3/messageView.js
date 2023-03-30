class MessageView {
  constructor() {
    this.addButtonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.inputEl = document.querySelector('#message-input');
    this.mainContainerEl = document.querySelector('#main-container');


    this.addButtonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {

    const newElement = document.createElement('div');
    newElement.className = 'message';
    newElement.innerText = this.inputEl.value;
    console.log('Thanks for clicking me!');

    this.mainContainerEl.append(newElement);
  }

  hideMessage() {
    const element = document.querySelector('.message:last-child');
    if(element) element.remove();

  }

  
}

module.exports = MessageView;