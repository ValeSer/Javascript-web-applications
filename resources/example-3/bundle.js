(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.addButtonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.inputEl = document.querySelector("#message-input");
          this.mainContainerEl = document.querySelector("#main-container");
          this.addButtonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const newElement = document.createElement("div");
          newElement.className = "message";
          newElement.innerText = this.inputEl.value;
          console.log("Thanks for clicking me!");
          this.mainContainerEl.append(newElement);
        }
        hideMessage() {
          const element = document.querySelector(".message:last-child");
          if (element)
            element.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
