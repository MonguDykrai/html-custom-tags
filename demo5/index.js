class MyCheckbox extends HTMLElement {
  static formAssociated = true;
  static observedAttributes = ["checked"];

  constructor() {
    debugger;
    super();
    this._internals = this.attachInternals();
    console.log(this._internals);
    this.addEventListener("click", this._onClick.bind(this));
  }

  get form() {
    return this._internals.form;
  }
  get name() {
    return this.getAttribute("name");
  }
  get type() {
    return this.localName;
  }

  get checked() {
    return this.hasAttribute("checked");
  }
  set checked(flag) {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/toggleAttribute
    this.toggleAttribute("checked", Boolean(flag));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // name will always be "checked" due to observedAttributes
    this._internals.setFormValue(this.checked ? "on" : null);
  }

  _onClick(event) {
    debugger;
    this.checked = !this.checked;
  }
}
customElements.define("my-checkbox", MyCheckbox);
