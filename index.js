// Write your code here!
// 1 remove id = main
const element = document.querySelector("body");
const main = document.getElementById("main");
element.removeChild(main);

// create h1 with id = "victory"
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");

newHeader.textContent = "William is the champion";
