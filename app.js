const title = document.querySelector(".title");
const chatInp = document.querySelector(".textInput");
const buttons = document.querySelectorAll(".submit-btn");
const btnMe = document.getElementById("btn-me");
const btnOther = document.getElementById("btn-other");
const chatBody = document.querySelector(".chat-body");
const chatContainer = document.querySelector(".chat-container");
const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-open");
const menuItems = document.querySelectorAll(".menu-open li");
const fileUpload = document.getElementById("wallpaper");

document.addEventListener("DOMContentLoaded", () => {
  chatInp.addEventListener("input", toggleButtons);
  btnMe.addEventListener("click", sendMessage);
  btnOther.addEventListener("click", receiveMessage);
  menu.addEventListener("click", toggleMenu);
  menuItems.forEach((item) => {
    item.addEventListener("click", itemClicked);
  });
  fileUpload.addEventListener("change", setWallpaper);
  setName();
});
const sendMessage = (e) => {
  if (!chatInp.value) return;
  let myConversation = document.createElement("div");
  myConversation.classList.add("my-conversation");
  myConversation.innerText = chatInp.value;
  chatBody.appendChild(myConversation);
  clearInput();
};
const receiveMessage = (e) => {
  if (!chatInp.value) return;
  let otherConversation = document.createElement("div");
  otherConversation.classList.add("other-conversation");
  otherConversation.innerText = chatInp.value;
  chatBody.appendChild(otherConversation);
  clearInput();
};
const clearInput = () => {
  chatInp.value = "";
  chatInp.classList.add("disabled");
  buttons.forEach((btn) => btn.classList.add("disabled"));
};
const setWallpaper = (e) => {
  let [img] = e.target.files;
  chatBody.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${URL.createObjectURL(
    img
  )})`;
  chatBody.classList.add("bg-prop");
};
const itemClicked = (e) => {
  switch (e.target.innerText) {
    case "Desktop Mode":
      chatContainer.classList.add("desk");
      toggleMenu();
      break;
    case "Mobile Mode":
      chatContainer.classList.remove("desk");
      toggleMenu();
      break;
    case "Change Chat Wallpaper":
      fileUpload.click();
      toggleMenu();
      break;
  }
};
const toggleMenu = (e) => {
  menuContainer.classList.toggle("active");
};
const toggleButtons = (e) => {
  if (e.target.value.length > 0) {
    chatInp.classList.remove("disabled");
    buttons.forEach((btn) => btn.classList.remove("disabled"));
  } else {
    chatInp.classList.add("disabled");
    buttons.forEach((btn) => btn.classList.add("disabled"));
  }
};
const setName = () => {
  title.innerHTML = prompt("Enter a chat name");
};
