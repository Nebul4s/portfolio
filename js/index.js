const menu = document.querySelector(".menu--container")

document.querySelector(".menu--icon").addEventListener("click", function(e){
    menu.classList.toggle("active")

    //potentially unnecessary optimization, but it probably doesn't hurt either 
    //the function handles the removal of the active class if clicked outside of the menu when it is open
    //therefore the eventlistener directly on the document would always fire when clicked anywhere,
    //regardless of the menu without this optimization
    if(menu.classList.contains("active")){
        document.addEventListener('click', handleDocumentClick);
    }else{
        document.removeEventListener("click", handleDocumentClick)
    }
})
const handleDocumentClick = (e) => {
    const menu = document.querySelector(".menu--container")

    if (!menu.contains(e.target)) {
        menu.classList.remove('active');
        document.removeEventListener("click", handleDocumentClick)
    }
};


const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.querySelector(".dots--container").addEventListener("click", function(e){
    document.querySelectorAll(".dot").forEach((dot) =>{
        dot.classList.remove("active")
    })

    e.target.closest(".dot").classList.add("active")
})

document.querySelector(".contact--options__container").addEventListener("click", function(){
    const form = document.querySelector(".form--window")
    const formContainer = document.querySelector(".form--window__container")
    form.classList.add("active");
    formContainer.classList.add("active")
    document.querySelector(".page--gradient").classList.add("active")


})

document.querySelector(".close--icon").addEventListener("click", function(){
    document.querySelector(".form--window").classList.remove("active")
    document.querySelector(".form--window__container").classList.remove("active")
    document.querySelector(".page--gradient").classList.remove("active")
})