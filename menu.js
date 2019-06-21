const toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", toggleMenu = () => {
    const navUl = document.getElementById("nav-ul");
    const toggleIcon = document.getElementById("toggle-icon");
    navUl.classList.toggle("disabled");
    if (!navUl.classList.contains("disabled")){
        toggleIcon.classList.replace("fa-bars", "fa-times");
    } else {
        toggleIcon.classList.replace("fa-times", "fa-bars");
    }
});