const icon = document.querySelector(".hamburger-menu");
const slidenavbar = document.querySelector(".slidenavbar");


icon.addEventListener("click", () => {
        slidenavbar.classList.toggle("change");
    });