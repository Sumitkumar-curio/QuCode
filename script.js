function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check localStorage for dark mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
  }

  // Add event listener to toggle button
  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
      toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
      toggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
    }
  });
});
