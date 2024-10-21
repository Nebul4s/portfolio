const reviewSlides = document.querySelectorAll(".review--slide");
reviewSlides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});

let curSlide = 0;
const changeSlide = (userSelection) => {
  curSlide++;

  if (userSelection) curSlide = userSelection;
  if (curSlide == 3) {
    curSlide = 0;
  }

  reviewSlides.forEach((slide, i) => {
    if (i - curSlide == 0) {
      slide.style.opacity = "1";
    } else {
      slide.style.opacity = "0";
    }

    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
  handleActiveDot(curSlide);
};

setInterval(changeSlide, 5000);

const handleActiveDot = (curSlide) => {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[curSlide].classList.add("active");
};

const dotsContainer = document.querySelector(".dots--container");

dotsContainer.addEventListener("click", function (e) {
  changeSlide(e.target.closest(".dot").dataset.slide);
});
