const box = document.querySelector(".box");
const heading = box.querySelector("h1");





function showTime() {
    const date = new Date();
let hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

if (hours > 12) {
  hours = hours - 12;
}

let AMPM = "AM";
if (date.getHours() >= 12) {
  AMPM = "PM";
}
  heading.innerText = `${hours} : ${min} : ${sec}  ${AMPM}`;
}

setInterval(showTime, 1000);

