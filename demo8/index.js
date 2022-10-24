import md5Js from "https://cdn.skypack.dev/md5.js@1.3.5";

class CodingDudeGravatar extends HTMLElement {
  get email() {
    return this.hasAttribute("email");
  }

  constructor() {
    super();
    this.addEventListener("click", (e) => {
      alert("You Clicked Me!");
    });
    this.innerText = "Hello There!";
  }
  static get observedAttributes() {
    return ["email"];
  }

  connectedCallback() {
    if (this.email) {
      var email = this.attributes.email.value;
      var gravatar = "http://www.gravatar.com/avatar";
      this.innerHTML = `<img src="${gravatar}"></br>${email}`;
    } else {
      this.innerHTML = "No Email";
    }
  }

  disconnectedCallback() {
    console.log(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "email") {
      //uncomment to see the behaviour
      //   alert(`The ${name} changed to ${newValue}`);
      console.log(`The ${name} changed to ${newValue}`);
    }
  }
}

window.customElements.define("codingdude-gravatar", CodingDudeGravatar);
