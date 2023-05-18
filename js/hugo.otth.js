// Scroll
// Get the button
let mybutton = document.getElementById("btnScroll");
let btnHome = document.getElementById("btnSectionHome")
let btnSection1 = document.getElementById("btnSection1")
let btnSection2 = document.getElementById("btnSection2")
let btnSection3 = document.getElementById("btnSection3")

var scroll = window.pageYOffset;

/*
// Get the body element
const body = document.querySelector('body');

// Update background gradient colors based on scroll position
window.addEventListener('scroll', () => {
  // Calculate the scroll percentage
  const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

  // Calculate the new colors for the gradient
  const color1 = `rgba(0, 4, 20, ${scrollPercentage / 100})`;
  const color2 = `rgba(3, 0, 244, ${scrollPercentage / 100})`;

  // Update the background gradient colors
  body.style.backgroundImage = `linear-gradient(to left top, ${color1}, ${color2})`;
});*/



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll() = function() {GoToSection()}

function GoToSection() {
    if(scroll <= 10){
        btnHome.style.opacity = 1;
    }else if(scroll >= 10 || scroll <= 40){
        btnSection1.style.opacity = 1;
    }else if(scroll >= 40 || scroll <= 60){
        btnSection2.style.opacity = 1;
    }else if(scroll >= 60 || scroll <= 100){
        btnSection3.style.opacity = 1;
    }
}

