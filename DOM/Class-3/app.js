const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
const timeBox = document.querySelector(".time");
let name;

function nameChange() {
  heading.innerHTML = `Hello ${name}`;

}
setTimeout(() => {
  name = prompt("Enter your full name");

  return name;
}, 2000);

setTimeout(nameChange, 2000);
function paraChange() {
  paragraph.innerHTML = `welcome ${name} hope you are well`;
  paragraph.innerHTML += `<br> <span style="color :red;gap :2px;font-size:20px; font-weight:bolder;">Enjoy !!</span>`;
}
setTimeout(paraChange, 2000);

setInterval(() => {
  const date = new Date();
  let time = date.toLocaleTimeString();
  timeBox.style.backgroundColor = "gray";
  timeBox.style.width = "200px";
  timeBox.style.height = "150px";
  timeBox.style.borderRadius = "8px";

  timeBox.innerHTML = `<h1>Current Time is </h1><h2>${time}</h2> `;

  // console.log(time);
}, 1000);

