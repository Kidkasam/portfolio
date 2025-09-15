const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");    // slide in navbar
    menuBtn.style.display = "none";    // hide menu button
    closeBtn.style.display = "block";  // show close button
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active"); // hide navbar
    closeBtn.style.display = "none";   // hide close button
    menuBtn.style.display = "block";   // show menu button
});
