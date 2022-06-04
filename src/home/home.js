import { toggleClass } from "../resuable.js";
import "./home.css";

function homeModule() {
  let container = document.createElement("div");
  toggleClass("Container", container);
  return container;
}
export default homeModule;
