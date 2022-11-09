// Form //
export let form = document.createElement("form");

let nameLabel = document.createElement("label");
nameLabel.for = "name";
nameLabel.textContent = "Name";
let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.required;
nameInput.placeholder = "John Smith";

let emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
nameLabel.for = "email";
let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.required = true;
emailInput.placeholder = "Johnsmith@gmail.com";

let message = document.createElement("div");
message.classList.add("message");
let messageLabel = document.createElement("label");
messageLabel.textContent = "Message";
messageLabel.for = "message";

let textarea = document.createElement("textarea");
textarea.id = "message";
textarea.maxLength = "200";
textarea.cols = "30";
textarea.rows = "5";
textarea.placeholder = "Type your message here";

message.append(messageLabel, textarea);

let btn = document.createElement("button");
btn.textContent = "Send";

form.append(nameLabel, nameInput, emailLabel, emailInput, message, btn);
