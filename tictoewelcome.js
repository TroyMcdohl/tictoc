const toggleBtn = document.getElementById("btn");

toggleBtn.addEventListener("click", () => {
  document.querySelector(".dark_mode_toggle").classList.toggle("active");
  document.querySelector(".container").classList.toggle("active");
});
