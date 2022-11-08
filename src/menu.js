// Menu title //
let menuTitle = document.createElement("h2");
menuTitle.classList.add("title");
menuTitle.textContent = "Customer Favourites";

// Menu div //
let menuDiv = document.createElement("div");
menuDiv.classList.add("menu");

// Spinach Choice//
let spinachDiv = document.createElement("div");
let spinachTitle = document.createElement("h2");
spinachTitle.textContent = "Spinach Burek 7€";
let spinachImg = document.createElement("img");
spinachImg.src = "../src/images/Spinach-burek.png";
spinachImg.alt = "A picture of spinnach burek";
spinachDiv.classList.add("menu-img");
spinachDiv.append(spinachTitle, spinachImg);

// Potato Choice//
let potatoDiv = document.createElement("div");
let potatoTitle = document.createElement("h2");
potatoTitle.textContent = "Potato Burek 7€";
let potatoImg = document.createElement("img");
potatoImg.src = "../src/images/Potato-burek.png";
potatoImg.alt = "A picture of potato burek";
potatoDiv.classList.add("menu-img");
potatoDiv.append(potatoTitle, potatoImg);

// Beef Choice//
let beefDiv = document.createElement("div");
let beefTitle = document.createElement("h2");
beefTitle.textContent = "Beef Burek 8€";
let beefImg = document.createElement("img");
beefImg.src = "../src/images/Beef-burek.png";
beefImg.alt = "A picture of beef burek";
beefDiv.classList.add("menu-img");
beefDiv.append(beefTitle, beefImg);

// Chese Choice//
let cheeseDiv = document.createElement("div");
let cheeseTitle = document.createElement("h2");
cheeseTitle.textContent = "Cheese Burek 7€";
let cheeseImg = document.createElement("img");
cheeseImg.src = "../src/images/Cheese-burek.png";
cheeseImg.alt = "A picture of cheese burek";
cheeseDiv.classList.add("menu-img");
cheeseDiv.append(cheeseTitle, cheeseImg);

// Beef and Mushroom Choice//
let beefAndMushDiv = document.createElement("div");
let beefAndMushTitle = document.createElement("h2");
beefAndMushTitle.textContent = "Beef and Mushroom Burek 9€";
let beefAndMushImg = document.createElement("img");
beefAndMushImg.src = "../src/images/beef&mushroom.png";
beefAndMushImg.alt = "A picture of beef and mushroom burek";
beefAndMushDiv.classList.add("menu-img");
beefAndMushDiv.append(beefAndMushTitle, beefAndMushImg);

// Gyro Choice//
let gyroDiv = document.createElement("div");
let gyroTitle = document.createElement("h2");
gyroTitle.textContent = "Chicken Gyro 9€";
let gyroImg = document.createElement("img");
gyroImg.src = "../src/images/Chicken-gyro.png";
gyroImg.alt = "A picture of chicken gyro";
gyroDiv.classList.add("menu-img");
gyroDiv.append(gyroTitle, gyroImg);

// Append items to menu div //
menuDiv.append(
  spinachDiv,
  potatoDiv,
  beefDiv,
  cheeseDiv,
  beefAndMushDiv,
  gyroDiv
);

export { menuTitle, menuDiv };
