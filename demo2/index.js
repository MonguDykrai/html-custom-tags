class MyElement extends HTMLElement {
  constructor() {
    super();
    console.log("oops...");
  }
}

window.customElements.define("my-element", MyElement);
