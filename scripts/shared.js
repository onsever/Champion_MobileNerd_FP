const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation-links")[0];
const currentAnchor = document.getElementById("current");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

currentAnchor.style.color = "violet";
currentAnchor.style.backgroundColor = "whitesmoke";
currentAnchor.style.borderRadius = "10px";
currentAnchor.style.fontWeight = "bold";
