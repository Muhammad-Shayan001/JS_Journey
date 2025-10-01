const distance = document.querySelector("#distance-input");
const time = document.querySelector("#time-input");
const result = document.querySelector(".result");
const submit = document.querySelector("submit");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  if (
    isNaN(time.value) ||
    parseInt(time.value) <= -1 ||
    time.value === "" ||
    isNaN(distance.value) ||
    parseInt(distance.value) <= -1 ||
    time.value === ""
  ) {
    result.innerHTML = "<h3> Enter Correct Number </h3>";
  } else {
    function calculate(distance, time) {
      const speed = distance * time;
      result.innerHTML = `<h1> Your Speed is ${speed} m/s </h1>`;
    }
    calculate(distance.value, time.value);
  }
});
