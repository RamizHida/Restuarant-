import { loadPage, navH2menu, content, footer } from "./homepage";

import { menuTitle, menuDiv } from "./menu";

loadPage();

// Replacing current DOM Elements with Elements from Menu Page//
navH2menu.addEventListener("click", () => {
  while (content.lastChild) {
    if (content.lastChild.getAttribute("class") == "nav") break;
    content.removeChild(content.lastChild);
  }
  content.append(menuTitle, menuDiv, footer);
});
