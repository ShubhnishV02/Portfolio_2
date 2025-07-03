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
    menuOpenClosePage.style.right = "-1115px";
    overlayBody.classList.remove("visible");
    PageBody.style.overflow = "auto";
    menuBTN.style.display = "block";
    closeBTN.style.display = "none";
}






// Slide-up animation functionality -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    // Function to add the slide-up class when elements come into view
    const observerUp = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-up");
                observerUp.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    }, {
        threshold: 0.4 // Trigger when 40% of the element is visible
    });

    // Select all elements you want to animate
    const slideUpElements = document.querySelectorAll(".slide-up-element");
    slideUpElements.forEach((el) => observerUp.observe(el));
});




// Slide-Right animation functionality -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    // Function to add the slide-right class when elements come into view
    const observerright = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-right");
                observerright.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    }, {
        threshold: 0.4 // Trigger when 40% of the element is visible
    });

    // Select all elements you want to animate
    const slideRightElements = document.querySelectorAll(".wow-rght");
    slideRightElements.forEach((el) => observerright.observe(el));
});




// Slide-Left animation functionality -----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    // Function to add the slide-right class when elements come into view
    const observerleft = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-left");
                observerleft.unobserve(entry.target); // Stop observing once the animation is applied
            }
        });
    }, {
        threshold: 0.4 // Trigger when 40% of the element is visible
    });

    // Select all elements you want to animate
    const slideleftElements = document.querySelectorAll(".wow-left");
    slideleftElements.forEach((el) => observerleft.observe(el));
});





// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();  // This will prevent the right-click menu from appearing
});

// Restrict inspect element to Ctrl + Shift + J
document.addEventListener('keydown', function (e) {
    // Block Ctrl + Shift + I (the default shortcut for opening DevTools)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();  // Block inspect element from opening
    }

    // Block F12 (another way to open DevTools)
    if (e.key === 'F12') {
        e.preventDefault();
    }

    // Allow only a custom key combination (Ctrl + shift + J)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
        return true;
    }
});

