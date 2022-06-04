import { toggleClass } from "../resuable.js";
import "./menu.css";

function menuModule() {
  let ss = document.createElement("div");
  toggleClass("Menu", ss);

  return ss;
}
export default menuModule;
