class FullpageLoading extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.src = `./loading.png`;
    const style = document.createElement("style");
    style.textContent = `
      div {
        width: 100vw;
        height: 100vh;
      }
    `;
    container.appendChild(img);
    shadow.appendChild(style);
    shadow.appendChild(container);

    console.log({ isConnected: style.isConnected });
  }

  connectedCallback() {
    console.log("..connectedCallback");
  }

  //指定观察属性，属性发生变化时调用  attributeChangedCallback
  static get observedAttributes() {
    return ["loading"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({ name, oldValue, newValue });
    switch (name) {
      case "loading":
        if (newValue === "loading") {
          this.addEventListener("click", (e) => {
            // console.log(e);
            const img = this.shadowRoot.querySelector("img");
            img.src = "./loading1.gif";
          });
        }
    }
  }
}

window.customElements.define("fullpage-loading", FullpageLoading);
