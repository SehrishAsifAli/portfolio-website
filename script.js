document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
  });
// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
    