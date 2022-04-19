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

function hybridAlert() {
  alert("You are now navigate in Hybrid Blogs");
}

function editFav() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const favBlogs = JSON.parse(localStorage.getItem("favBlogs"));
  const href = window.location.href;
  for (const blog of favBlogs) {
    if (blog.email === currentUser.email) {
      if (blog.blogs.indexOf(href) === -1) {
        blog.blogs.push(href);
        document.getElementById("favIcon").src = "images/star.png";
      } else {
        blog.blogs.pop(href);
        document.getElementById("favIcon").src = "images/un_star.png";
      }
    }
    localStorage.setItem("favBlogs", JSON.stringify(favBlogs));
    return;
  }
}

function getFav() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const favBlogs = JSON.parse(localStorage.getItem("favBlogs"));
  for (const blog of favBlogs) {
    if (blog.email === currentUser.email) {
      const blogs = blog.blogs;
      for (const blog of blogs) {
        if (blog === window.location.href) {
          document.getElementById("favIcon").src = "images/star.png";
        }
      }
    }
  }
}

function loadFav() {
  const favBlogs = JSON.parse(localStorage.getItem("favBlogs"));
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  for (const blog of favBlogs) {
    if (blog.email === currentUser.email) {
      for (const link of blog.blogs) {
        const aTag = document.createElement("a");
        aTag.href = link;
        aTag.innerHTML = link;
        document.getElementsByClassName("favContainer")[0].appendChild(aTag);
      }
    }
  }
}
