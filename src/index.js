import "normalize.css";
import "./style.css";
import html from "./template.html";
import { loadElementsIntoArray } from "./resuable";
import homeModule from "./home/home.js";
import menuModule from "./menu/menu.js";
import contactUsModule from "./contactUs/contactUs.js";

const ControlNavigation = (function () {
  let navBarButtons = loadElementsIntoArray(".Navbar li ul");
  let main = document.querySelector(".Main");
  navBarButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      main.innerHTML = "";
      switch (event.target.id) {
        case "home":
          main.appendChild(homeModule());
          break;
        case "menu":
          main.appendChild(menuModule());
          break;
        case "contactUs":
          main.appendChild(contactUsModule());
      }
    });
  });
})();
