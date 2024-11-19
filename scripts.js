document.addEventListener("DOMContentLoaded", function () {
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const showButtons = document.querySelectorAll(".show");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  // Show the current slide and hide others
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
    reHideH1();
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
