// List of background classes
const backgrounds = [
  "bg1",
  "bg2",
  "bg3",
  "bg4",
  "bg5",
  "bg6",
  "bg7",
  "bg8",
  "bg9",
  "bg10",
];

let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const showButtons = document.querySelectorAll(".show");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const body = document.querySelector("body");
const button = document.querySelector("button");

function setBackground() {
  body.classList.remove(...backgrounds); // Remove all background classes
  const randomIndex = Math.floor(Math.random() * backgrounds.length) + 1; // Get random index
  body.classList.add(`bg${randomIndex}`); // Apply the random background class
  randomizeVars(body);
}

// Show the current slide and hide others
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
      setBackground(slide);
    } else {
      slide.classList.remove("active");
    }
  });
  reHideH1();
}

function randomizeVars() {
  // colors
  const randomNum = Math.floor(Math.random() * 360);
  const cols = [0, 135, -135, 180].map((num) => (num + randomNum + 360) % 360);
  const hslas = cols.map((val) => `hsl(${val}, 100%, 66%)`);
  hslas.forEach((hsla, i) => {
    body.style.setProperty(`--color${i + 1}`, hsla);
  });

  // angle
  const angle = Math.random() * 360;
  body.style.setProperty("--angle", `${angle}deg`);

  // boxSize
  const width = 100 / Math.floor(Math.random() * 50);
  const height = 100 / Math.floor(Math.random() * 50);
  body.style.setProperty("--width", `${width}%`);
  body.style.setProperty("--height", `${height}%`);
}

function reHideH1() {
  document.querySelectorAll("h1").forEach((h1) => {
    h1.style.opacity = "0";
  });
  document.querySelectorAll("button").forEach((button) => {
    if (button.textContent === "הסתר") button.textContent = "הראה";
  });

  showButtons.forEach((button) => {
    button.style.display = "inline-block";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Show/hide the h1 text when the "הראה" button is clicked
  showButtons.forEach((button) => {
    button.addEventListener("mousedown", play);
    button.addEventListener("click", function () {
      const h1 = button.previousElementSibling.previousElementSibling;
      play();
      playHatikva();

      if (h1 && h1.tagName === "H1") {
        const makeShow = button.textContent === "הראה";
        h1.style.opacity = makeShow ? "1" : "0";
        button.textContent = makeShow ? "הסתר" : "הראה";
      }
    });
  });

  // Show the first slide
  showSlide(currentSlideIndex);

  // Handle "previous" and "next" buttons
  prevButton.addEventListener("mousedown", function () {
    play();
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
    }
  });

  nextButton.addEventListener("mousedown", function () {
    play();
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }
  });
});

function play() {
  document.getElementById("sound-1").play();
}

function playHatikva() {
  document.getElementById("hatikva").play();
}
