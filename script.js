//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});
//javascript for hamburger
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".navigation");
    navBar.classList.toggle("active")
};

// yebiucshnifwenfkj
var typed = new Typed(".auto-type", {
    strings: ["Better", "Safer", "Together"],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true
});





