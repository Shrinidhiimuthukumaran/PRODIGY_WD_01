window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 50) {
        menu.style.backgroundColor = "#333"; // Change background color on scroll
    } else {
        menu.style.backgroundColor = "transparent";
    }
});
