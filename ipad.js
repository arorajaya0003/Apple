document.getElementById("left-arrow-ipad").addEventListener("click", function () {
    document.getElementById("ipad-card-container").scrollBy({
      left: -500, // Adjust the value to scroll by a custom width
      behavior: "smooth",
    });
  });
  
  document.getElementById("right-arrow-ipad").addEventListener("click", function () {
    document.getElementById("ipad-card-container").scrollBy({
      left: 500, // Adjust the value to scroll by a custom width
      behavior: "smooth",
    });
  });
  