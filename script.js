// Write your script here

function next() {
  if (targetCircle === 5) return;
  else if (targetCircle === 4) {
    nextButton.style.backgroundColor = "var(--non-active-color)";
    nextButton.style.color = "rgb(178,177,175)";
  }

  if (targetCircle === 1) {
    prevButton.style.backgroundColor = "var(--active-color)";
    prevButton.style.color = "whitesmoke";
  }

  circles[targetCircle].classList.toggle("active");
  connections[targetCircle - 1].style.backgroundColor = "var(--active-color)";

  prevButton.disabled = targetCircle <= 1 ? true : false;

  if (targetCircle <= 4) targetCircle++;
}

function prev() {
  if (targetCircle === 1) return;
  else if (targetCircle === 5) {
    nextButton.style.background = "var(--active-color)";
    nextButton.style.color = "whitesmoke";
  }

  if (targetCircle === 2) {
    prevButton.style.background = "var(--non-active-color)";
    prevButton.style.color = "rgb(178,177,175)";
  }

  circles[targetCircle - 1].classList.toggle("active");
  connections[targetCircle - 2].style.background = "var(--non-active-color)";

  nextButton.disabled = targetCircle >= 5 ? true : false;

  if (targetCircle >= 2) targetCircle--;
}

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let targetCircle = 1;

const circles = document.querySelectorAll(".circle");
const connections = document.querySelectorAll(".connection");

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);
