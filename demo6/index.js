const customElement = document.getElementById("customElement");
const loading = customElement.hasAttribute("loading");
const [img] = document.getElementsByTagName("img");

document.querySelector("#canvas").addEventListener("click", () => {
  customElement.toggleAttribute("loading");
  if (customElement.hasAttribute("loading") === false) {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
});
