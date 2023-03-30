/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the click button and displays the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    
    const buttonEl = document.querySelector('#show-message-button');
    
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'This is a test message';

    buttonEl.click();

    expect(document.querySelector('.message:last-child')).not.toBeNull();
    expect(document.querySelector('.message:last-child').innerText).toEqual('This is a test message');
  });

  it('clicks the hide button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const buttonEl2 = document.querySelector('#hide-message-button');
    buttonEl2.click();

    expect(document.querySelector('.message')).toBeNull();
  });
});