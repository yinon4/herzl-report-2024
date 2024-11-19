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

document.addEventListener("DOMContentLoaded", function () {
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const showButtons = document.querySelectorAll(".show");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const body = document.querySelector("body");

  function setBackground() {
    body.classList.remove(...backgrounds); // Remove all background classes
    const randomIndex = Math.floor(Math.random() * backgrounds.length); // Get random index
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
    const randomNum = Math.floor(Math.random() * 90);
    const cols = [0, 135, -135, 180].map(
      (num) => (num + randomNum + 360) % 360
    );
    const hslas = cols.map((val) => `hsl(${val}, 100%, 66%)`);
    hslas.forEach((hsla, i) => {
      body.style.setProperty(`--color${i}`, hsla);
    });

    // angle
    const angle = Math.random() * 360;
    body.style.setProperty("--angle", `${angle}deg`);
    // boxSize
    const width = 100 / Math.floor(Math.random() * 100);
    const height = 100 / Math.floor(Math.random() * 100);
    body.style.setProperty("--width", `${width}%`);
    body.style.setProperty("--height", `${height}%`);
  }

  function reHideH1() {
    const h1s = document.querySelectorAll("h1");
    h1s.forEach((h1) => {
      h1.style.display = "none";
    });

    showButtons.forEach((button) => {
      button.style.display = "inline-block";
    });
  }

  // Show/hide the h1 text when the "הראה" button is clicked
  showButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const h1 = button.previousElementSibling.previousElementSibling;

      if (h1 && h1.tagName === "H1") {
        h1.style.display = "block";
        button.style.display = "none";
      }
    });
  });

  // Show the first slide
  showSlide(currentSlideIndex);

  // Handle "previous" and "next" buttons
  prevButton.addEventListener("click", function () {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      showSlide(currentSlideIndex);
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }
  });
});
