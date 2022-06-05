import { toggleClass } from "../resuable.js";
import "./menu.css";

let loadImages = function () {
  let images = [];
  let imageElement = document.createElement("img");
  let ImportedImages = require.context("./assets/", true, /\.(jpg|jpeg)$/);
  ImportedImages.keys().forEach((ele) => {
    let clonedImageElement = imageElement.cloneNode(false);
    clonedImageElement.src = ImportedImages(ele);
    images.push(clonedImageElement);
  });
  return images;
};
function menuModule() {
  let menu = document.createElement("div");
  toggleClass("Menu", menu);
  let burgerContainer = document.createElement("div");
  toggleClass("BurgerContainer", burgerContainer);
  let burgerText = document.createElement("p");
  burgerText.textContent = "burger";
  loadImages().forEach((image) => {
    burgerContainer = burgerContainer.cloneNode(false);
    burgerText = burgerText.cloneNode(true);
    burgerContainer.appendChild(image);
    burgerContainer.appendChild(burgerText);
    menu.appendChild(burgerContainer);
  });

  return menu;
}
export default menuModule;
