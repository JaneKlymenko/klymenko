document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("step1").classList.add("active");
});

function nextStep(step) {
  var steps = document.querySelectorAll(".step");
  steps.forEach(function (stepElement) {
    stepElement.classList.remove("active");
  });

  document.getElementById("step" + step).classList.add("active");
}

document.getElementById("soundButton").addEventListener("click", function () {
  this.classList.toggle("muted"); // Додає або прибирає клас muted
});

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 0,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
