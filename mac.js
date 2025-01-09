document.getElementById("left-arrow").addEventListener("click", function () {
  document.getElementById("second-card-container").scrollBy({
    left: -500, // Adjust the value to scroll by a custom width
    behavior: "smooth",
  });
});

document.getElementById("right-arrow").addEventListener("click", function () {
  document.getElementById("second-card-container").scrollBy({
    left: 500, // Adjust the value to scroll by a custom width
    behavior: "smooth",
  });
});
