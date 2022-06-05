import "normalize.css";
import "./style.css";
import html from "./template.html";
import { loadElementsIntoArray } from "./resuable";
import homeModule from "./home/home.js";
import menuModule from "./menu/menu.js";
import contactUsModule from "./contactUs/contactUs.js";

const ControlNavigation = (function () {
  let navBarButtons = loadElementsIntoArray(".Navbar li ul");
  let container = document.querySelector(".Container");
  container.appendChild(homeModule());
  navBarButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(container.firstChild);
      if (event.target.id != container.classList[0]) {
        container.innerHTML = "";
        switch (event.target.id) {
          case "home":
            container.appendChild(homeModule());
            break;
          case "menu":
            container.appendChild(menuModule());
            break;
          case "contactUs":
            container.appendChild(contactUsModule());
        }
      }
    });
  });
})();
