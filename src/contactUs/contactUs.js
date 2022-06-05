import { toggleClass } from "../resuable.js";
import "./contactUs.css";

export default function contactUsModule() {
  let contactUs = document.createElement("div");
  toggleClass("ContactUs", contactUs);

  return contactUs;
}
