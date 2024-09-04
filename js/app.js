/**
 * navbar hamburger menu
 */
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

/**
 * partners slideshow
 */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/**
 * tick box enabling button
 */
const checkbox = document.getElementById("consent-checkbox");
const getInTouchButton = document.getElementById("get-in-touch-button");

function updateButtonState() {
  if (checkbox.checked) {
    getInTouchButton.disabled = false;
    getInTouchButton.classList.remove("dull");
  } else {
    getInTouchButton.disabled = true;
    getInTouchButton.classList.add("dull");
  }
}

// Initial state
updateButtonState();

// Add event listener to checkbox
checkbox.addEventListener("change", updateButtonState);
