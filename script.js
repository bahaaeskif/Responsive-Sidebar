let closedBtn = document.querySelector(".btn");
let searchBtn = document.querySelector(".search-box");
let sideBar = document.querySelector(".sidebar");
let homeSection = document.querySelector(".home-section");
let linkName = document.querySelectorAll(".link-name");

searchBtn.addEventListener("click", (e) => {
    sideBar.classList.remove("close");
    homeSection.classList.toggle("close");
});


closedBtn.addEventListener("click", (e) => {
    sideBar.classList.toggle("close");
    homeSection.classList.toggle("close");
});


