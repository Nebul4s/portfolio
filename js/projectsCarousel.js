//project slide draggable carousel

const container = document.querySelector(".cards--container");
const innerContainer = document.querySelector(".inner--container");
const carouselItems = document.querySelectorAll(".project--card");
const pageGradient = document.querySelector(".page--gradient");

let pressed = false;
let startX;
let currentX = 0;
let prevX = 0;
let isDragging = false;
let startClickX, startClickY;
const dragThreshold = 10; // Minimum movement in pixels to detect a drag

container.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.clientX - prevX;
  startClickX = e.clientX;
  startClickY = e.clientY;
  isDragging = false;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", (e) => {
  container.style.cursor = "grab";
  pressed = false;

  const endClickX = e.clientX;
  const endClickY = e.clientY;

  // If the movement is below the threshold, it is considered a click, otherwise, it's a drag
  if (
    Math.abs(endClickX - startClickX) < dragThreshold &&
    Math.abs(endClickY - startClickY) < dragThreshold
  ) {
    isDragging = false;
  } else {
    isDragging = true;
  }

  prevX = currentX;
});

container.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  currentX = e.clientX - startX;
  innerContainer.style.transform = `translateX(${currentX}px)`;
  boundItems();
});

// Distinguish between dragging and clicking
carouselItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      pageGradient.classList.add("active");
      document
        .querySelector(".expanded--project__container")
        .classList.add("active");
    }
  });
});

// Bounding function to ensure items stay within limits
let boundItems = () => {
  let outer = container.getBoundingClientRect();
  let inner = innerContainer.getBoundingClientRect();

  if (currentX > 0) {
    currentX = 0;
    innerContainer.style.transform = `translateX(${currentX}px)`;
  }

  if (inner.right < outer.right) {
    currentX = -(inner.width - outer.width);
    innerContainer.style.transform = `translateX(${currentX}px)`;
  }
};

// Touch support for mobile
container.addEventListener("touchstart", (e) => {
  pressed = true;
  startX = e.touches[0].clientX - prevX;
  startClickX = e.touches[0].clientX;
  startClickY = e.touches[0].clientY;
  isDragging = false;
});

container.addEventListener("touchend", (e) => {
  pressed = false;

  const endClickX = e.changedTouches[0].clientX;
  const endClickY = e.changedTouches[0].clientY;

  if (
    Math.abs(endClickX - startClickX) < dragThreshold &&
    Math.abs(endClickY - startClickY) < dragThreshold
  ) {
    isDragging = false;
  } else {
    isDragging = true;
  }

  prevX = currentX;
});

container.addEventListener("touchmove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  currentX = e.touches[0].clientX - startX;
  innerContainer.style.transform = `translateX(${currentX}px)`;
  boundItems();
});

document
  .querySelector(".img--container")
  .addEventListener("click", function () {
    document
      .querySelector(".expanded--project__container")
      .classList.remove("active");
    pageGradient.classList.remove("active");
  });
