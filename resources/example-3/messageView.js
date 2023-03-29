class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const message = document.createElement('div');
    message.textContent = 'This message displayed by JavaScript';
    message.Id = 'message';
    this.buttonEl.append(message);
  }
}

module.exports = MessageView;