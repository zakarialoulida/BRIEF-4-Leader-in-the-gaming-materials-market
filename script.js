const scrollContainer = document.getElementById("scroll-container");
const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");

scrollLeftButton.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 400; 
});

scrollRightButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 400; 
});



