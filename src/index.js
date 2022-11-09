import { loadPage, navH2menu, content, footer, navH2Contact } from "./homepage";

import { form } from "./contact";

import { menuTitle, menuDiv } from "./menu";

loadPage();

// Replacing current DOM Elements with Elements from Menu Page//
navH2menu.addEventListener("click", () => {
  while (content.lastChild) {
    if (content.lastChild.getAttribute("class") == "nav") {
      break;
    }
    content.removeChild(content.lastChild);
  }
  content.append(menuTitle, menuDiv, footer);
});

navH2Contact.addEventListener("click", () => {
  while (content.lastChild) {
    if (content.lastChild.getAttribute("class") == "nav") {
      break;
    }
    content.removeChild(content.lastChild);
  }
  content.append(form, footer);
});
