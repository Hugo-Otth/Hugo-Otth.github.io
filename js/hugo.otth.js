// Scroll
// Get the button
let mybutton = document.getElementById("btnScroll");
let btnHome = document.getElementById("btnSectionHome")
let btnSection1 = document.getElementById("btnSection1")
let btnSection2 = document.getElementById("btnSection2")
let btnSection3 = document.getElementById("btnSection3")

var scroll = window.pageYOffset;




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

