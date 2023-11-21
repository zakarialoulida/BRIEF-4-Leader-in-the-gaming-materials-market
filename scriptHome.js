// menu
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");

    burgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("hidden");
    });
});

//panier
const panier = document.getElementById('panier');
const panierlist = document.getElementById('panierlist');

let x = false;
panier.addEventListener("click", e => {
    if (x === false) {
        panierlist.style.display = 'flex';
        x = true;
    } else {
        panierlist.style.display = 'none';
        x = false;
    }

})


const scrollContainer = document.getElementById("scroll-container");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

const contentWidth = scrollContainer.scrollWidth;

scrollLeftButton.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 400; 
});

scrollRightButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 400; 
});




