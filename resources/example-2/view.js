class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    const newParagraph = document.createElement('p');
    const newContent = document.createTextNode(text);

    newParagraph.appendChild(newContent);
    const currentParagraph = document.getSelection('first-paragraph');
    document.body.insertBefore(newParagraph, currentParagraph.previousElementSibling);
  }

  clearParagraphs() {
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach(element => element.remove());
  }


}

module.exports = View;