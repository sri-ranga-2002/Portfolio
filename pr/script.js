document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamicText");
    const terms = ["developer", "comic", "nerd", "designer","writer","marvel head"]; // Add more terms as needed
    let currentIndex = 0;
  
    function changeTerm() {
      dynamicText.textContent = terms[currentIndex];
      currentIndex = (currentIndex + 1) % terms.length;
    }
  
    setInterval(changeTerm, 1000); // Change term every 2 seconds
  
    // Stop changing term when scrolling
    window.addEventListener("scroll", function() {
      clearInterval(changeTerm);
      currentIndex = 0; // Reset index to start over when scrolling to top
    });
  });
  