import { toggleClass } from "../resuable.js";
import "./home.css";
import chefImg from "./assets/chef.jpg";
function homeModule() {
  let home = document.createElement("div");
  toggleClass("Home", home);
  let chefImgElement = document.createElement("img");
  toggleClass("Chef", chefImgElement);
  chefImgElement.src = chefImg;
  home.appendChild(chefImgElement);
  return home;
}
export default homeModule;
