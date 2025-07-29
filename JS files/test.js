


//login javascript
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () => {
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  };

};







//slide in the order box
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
//the new
showSlides();

// Pause slideshow on hover over image
let slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseover', function () {
  clearTimeout(slideInterval); // Stop the slide transition on hover
});

slideshowContainer.addEventListener('mouseleave', function () {
  slideInterval = setTimeout(showSlides, 3000); // Restart the slide transition when mouse leaves
});

// Car Selection Change Event
const brandSelector = document.getElementById('item');
brandSelector.addEventListener('change', function () {
  const selectedBrand = brandSelector.value;
  const slides = document.getElementsByClassName("mySlides");

  // Change image based on selected brand
  if (selectedBrand === "BMW") {
    slides[0].children[0].src = "/image/order1.jpg"; // Image for BMW
  } else if (selectedBrand === "Mercedes") {
    slides[0].children[0].src = "/image/order2.jpg"; // Image for BYD
  } else if (selectedBrand === "BYD") {
    slides[0].children[0].src = "/image/order3.jpg"; // Image for Mercedes
  } else if (selectedBrand === "Toyota") {
    slides[0].children[0].src = "/image/order4.jpg"; // Image for Toyota
  } else if (selectedBrand === "Zeekr") {
    slides[0].children[0].src = "/image/order6.jpg"; // Image for Zeekr
  } else if (selectedBrand === "Nissan") {
    slides[0].children[0].src = "/image/order55.jpg"; // Image for Nissan
  } else if (selectedBrand === "porsh") {
    slides[0].children[0].src = "/image/porshe.avif";//porsh
  }
   
});

// Handle the order process
document.querySelector(".order-box form").addEventListener("submit", function (event) {
  event.preventDefault();  // Prevent form submission

  // Show order success message
  alert("Order Successful! Redirecting to payment...");

  // Redirect to the payment page after a short delay
  setTimeout(function () {
    window.location.href = "/htmlfiles/payment.html";  // Replace with your actual payment page URL
  }, 2000);
});