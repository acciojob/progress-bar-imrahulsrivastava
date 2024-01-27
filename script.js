// Write your script here

const circles = document.querySelectorAll(".circle");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function updateButtons() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === circles.length - 1;
}

function setActiveCircle(index) {
  circles.forEach((circle, i) => {
    circle.classList.toggle("active", i === index);
  });
}

function nextCircle() {
  if (currentIndex < circles.length - 1) {
    currentIndex++;
    setActiveCircle(currentIndex);
    updateButtons();
  }
}

function prevCircle() {
  if (currentIndex > 0) {
    currentIndex--;
    setActiveCircle(currentIndex);
    updateButtons();
  }
}
