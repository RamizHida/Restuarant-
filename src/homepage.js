export let content = document.querySelector("#content");

// Adding and styline Nav Bar //
let nav = document.createElement("nav");
nav.classList.add("nav");
export let navH1 = document.createElement("h1");
navH1.textContent = "Betim's Bureks!";
navH1.classList.add("title");

export let navH2menu = document.createElement("h2");
navH2menu.textContent = "Menu";

export let navH2Contact = document.createElement("h2");
navH2Contact.textContent = "Contact";

nav.append(navH1, navH2menu, navH2Contact);

// Adding and styling Intro //
export let mainIntroDiv = document.createElement("div");
mainIntroDiv.classList.add("intro");
// Intro Div 1
let introDiv1 = document.createElement("div");
let introDiv1H2 = document.createElement("h2");
introDiv1H2.classList.add("name");

let introDiv1span = document.createElement("span");
introDiv1span.classList.add("secret");
introDiv1span.textContent = "Betim";
introDiv1H2.textContent = ` ${introDiv1span.textContent}: Restaurant Owner`;

let introDiv1Img = document.createElement("img");
introDiv1Img.id = "chef";
introDiv1Img.src = "../src/images/chef-betim.png";
introDiv1Img.alt = "A picture of a chef";

introDiv1.append(introDiv1H2, introDiv1Img);

// Intro Div 2
let intoDiv2 = document.createElement("div");
intoDiv2.setAttribute("id", "rest-desc");

let introDiv2span = document.createElement("span");
introDiv2span.classList.add("secret");
introDiv2span.textContent = "secret";
let introDiv2para = document.createElement("p");
introDiv2para.textContent = `Whether you are new to Balkan dishes, or consider yourself a master chef when it comes to cooking them, at Betim's Bureks we guarnetee to satisify your appetite and, more importantly, your taste buds! We believe nothing is more enjoyable than a delicious meal overseeing a beautiful sight. We pride ourselves as having the best bureks in all the Balkans, and some critics say all of Europe! What makes a delicious burek? Fresh ingreidents, patience, and the esstenial ingredient, my ${introDiv2span.textContent} recipe! Don't take my word for it, come and try one yourself! We are a family-owned business and have been making stomachs happy and full since 1889. From my family to yours, we hope to see you soon!`;

intoDiv2.append(introDiv2para);

// Adding introDiv1 and introDiv2 to main intro
mainIntroDiv.append(introDiv1, intoDiv2);

// Adding and styling last div section, which is beach //
export let beachDiv = document.createElement("div");
beachDiv.classList.add("beach");
let beachDivH3 = document.createElement("h3");
beachDivH3.classList.add("title");
beachDivH3.textContent = "Where You Will Be Eating";

let beachImg = document.createElement("img");
beachImg.id = "beach-img";
beachImg.src = "../src/images/balkan-beach.png";
beachImg.alt =
  "A picture of an old Balkan style building near a body of water and a valley next to it";

beachDiv.append(beachDivH3, beachImg);

// Add and styling a footer //
export let footer = document.createElement("footer");
footer.classList.add("footer");
// footer.textContent = "Ramiz";
let footerIcon = document.createElement("img");
let link = document.createElement("a");
link.setAttribute("href", "https://github.com/RamizHida");
link.setAttribute("target", "_blank");
footerIcon.id = "footer";
footerIcon.src = "../src/images/github.png";
link.append(footerIcon);
// footer.append(footerIcon, link);
footer.append(link);

// Appending all sections//
content.append(nav, mainIntroDiv, beachDiv, footer);

export function loadPage() {
  return content;
}
