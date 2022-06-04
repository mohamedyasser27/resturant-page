import { toggleClass } from "../resuable.js";
import "./contactUs.css";

export default function contactUsModule() {
  let ss = document.createElement("div");
  toggleClass("ContactUs", ss);
  return ss;
}
