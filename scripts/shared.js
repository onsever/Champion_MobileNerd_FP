const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navigation-links")[0];
const currentAnchor = document.getElementById("current");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// currentAnchor.style.color = "violet";
// currentAnchor.style.backgroundColor = "whitesmoke";
// currentAnchor.style.borderRadius = "10px";
// currentAnchor.style.fontWeight = "bold";

function hybridAlert() {
  alert("You are now navigate in Hybrid Blogs");
}

function checkMyFav(id) {
  const currentFav = JSON.parse(localStorage.getItem("currentFav"));
  for (const blog of currentFav) {
    if (blog.id === id) {
      return true;
    }
  }
  return false;
}

function setCurrentFav() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const favBlogs = JSON.parse(localStorage.getItem("favBlogs"));
  if (favBlogs) {
    for (const item of favBlogs) {
      if (item.email === currentUser.email) {
        localStorage.setItem("currentFav", JSON.stringify(item.blogs));
      }
    }
  }
}

function setFav(id, url, title) {
  const blog = { id, url, title };
  const currentFav = JSON.parse(localStorage.getItem("currentFav"));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  currentFav.push(blog);
  localStorage.setItem("currentFav", JSON.stringify(currentFav));
  const favBlogs = JSON.parse(localStorage.getItem("faveBlogs"));
  for (const item of favBlogs) {
    if (item.email === currentUser.email) {
      item.blogs = currentFav;
      localStorage.setItem("favBlogs", JSON.stringify(currentFav));
    }
  }
}

function disFav(id) {
  const currentFav = JSON.parse(localStorage.getItem("currentFav"));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const favBlogs = JSON.parse(localStorage.getItem("faveBlogs"));
  currentFav.filter((item) => item.id !== id);
  localStorage.setItem("currentFav", currentFav);
  for (const item of favBlogs) {
    if (item.email === currentUser.email) {
      item.blogs = currentFav;
      localStorage.setItem("favBlogs", JSON.stringify(currentFav));
    }
  }
}
