import htmlClass from "./htmlClass.js";

const pageGradient = document.querySelector(".page--gradient");
const menu = document.querySelector(".menu--container");

document.querySelector(".menu--icon").addEventListener("click", function (e) {
  menu.classList.toggle("active");

  //potentially unnecessary optimization, but it probably doesn't hurt either
  //the function handles the removal of the active class if clicked outside of the menu when it is open
  //therefore the eventlistener directly on the document would always fire when clicked anywhere,
  //regardless of the menu without this optimization
  if (menu.classList.contains("active")) {
    document.addEventListener("click", handleDocumentClick);
  } else {
    document.removeEventListener("click", handleDocumentClick);
  }
});
const handleDocumentClick = (e) => {
  const menu = document.querySelector(".menu--container");

  if (!menu.contains(e.target)) {
    menu.classList.remove("active");
    document.removeEventListener("click", handleDocumentClick);
  }
};

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    const sectionId = item.getAttribute("data-section");
    scrollToSection(sectionId);
  });
});

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

document
  .querySelector(".contact--options__container")
  .addEventListener("click", function (e) {
    const option = e.target?.closest(".contact--option").dataset.form;
    const form = document.querySelector(".form--window");
    const formContainer = document.querySelector(".form--window__container");

    //generate markup
    if (!htmlClass._generateMarkup(option)) return;
    form.innerHTML = htmlClass._generateMarkup(option);

    //class control
    form.classList.add("active");
    formContainer.classList.add("active");
    pageGradient.classList.add("active");

    //handle form close
    const closeForm = () => {
      document.querySelector(".form--window").classList.remove("active");
      document
        .querySelector(".form--window__container")
        .classList.remove("active");
      pageGradient.classList.remove("active");
    };

    const closeIcon = document.querySelector(".close--icon");
    if (closeIcon) {
      closeIcon.addEventListener("click", closeForm);
    }
    const sendBtn = document.querySelector(".send--button");
    sendBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Message sent! (not really, but it could have been)");
      closeForm();
    });
  });
