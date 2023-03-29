class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEl2 = document.querySelector('#hide-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.buttonEl2.addEventListener('click', () => {
      this.hideMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessage() {

    const newElement = document.createElement('div');
    newElement.className = 'message';
    newElement.innerText = 'This message displayed by JavaScript';
    console.log('Thanks for clicking me!');

    this.mainContainerEl.append(newElement);
  }

  hideMessage() {
    const element = document.querySelector('.message:last-child');
    if(element) element.remove();

  }

  
}

module.exports = MessageView;