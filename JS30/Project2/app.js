let hourHand = document.querySelector(' #hour');
let minHand = document.querySelector(' #min');
let secHand = document.querySelector(' #sec');
// console.log(hour, min, second);
function setTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hourHand.style.transform = `rotate(${(hour / 60) *360 + ((min/60)*30) +20  }deg)`;
    minHand.style.transform = `rotate(${(min / 60) * 360   + ((sec/60)*6) }deg)`;
    secHand.style.transform = `rotate(${sec / 60 * 360     }deg)`;

    
}
setInterval(setTime, 1000);
setTime(); // Initial call to set the time immediately
