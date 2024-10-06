// JavaScript to make navbar sticky with shadow on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-body');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-sticky');  // Add shadow when scrolling down
        navbar.style.background = "linear-gradient(to right, rgb(243, 245, 248), rgb(243, 245, 248))";
    } else {
        navbar.classList.remove('nav-sticky');  // Remove shadow when at the top
        navbar.style.background = "linear-gradient(to right, white, rgb(243, 245, 248))";
    }
});




// Menu Button Open Close Functionality-------------------------------------------------------------------

const menuBTN = document.getElementById("menu-btn");
const closeBTN = document.getElementById("close-btn");
const menuOpenClosePage = document.querySelector(".menu-absolute-section");
const overlayBody = document.querySelector(".overlay-body");
const PageBody = document.querySelector(".complete-body");

menuBTN.addEventListener("click", () => {
    openMenu();
});

closeBTN.addEventListener("click", () => {
    closeMenu();
});

overlayBody.addEventListener("click", closeMenu);

function openMenu() {
    menuOpenClosePage.style.right = "0";
    overlayBody.classList.add("visible");
    PageBody.style.overflow = "hidden";
    menuBTN.style.display = "none";
    closeBTN.style.display = "block";
}

function closeMenu() {
    menuOpenClosePage.style.right = "-650px";
    overlayBody.classList.remove("visible");
    PageBody.style.overflow = "auto";
    menuBTN.style.display = "block";
    closeBTN.style.display = "none";
}






// Slide-up animation functionality -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    // Function to add the slide-up class when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-up");
                observer.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    }, {
        threshold: 0.4 // Trigger when 40% of the element is visible
    });

    // Select all elements you want to animate
    const slideUpElements = document.querySelectorAll(".slide-up-element");
    slideUpElements.forEach((el) => observer.observe(el));
});