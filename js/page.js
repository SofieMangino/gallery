function navToggle() { // creates a new function named navToggle
  var x = document.getElementById("main-nav"); // creates a variable set to #main-nav
    if (x.className === "topnav") { // if #main-nav has a class of .topnav,
    x.className += " responsive";   // then add a new class
  } else {                          // if it doesn't,
    x.className = "topnav";         // set class to .topnav
  } //closes if-else
}

var slideIndex = 1; // creates a new variable, names it slideIndex, and sets it = to 1

showSlides(slideIndex); // uses the index variable as the parameter of the showSlides function

function plusSlides(n) { // function for incrementing (adding to) slideIndex, takes n as its parameter
  showSlides(slideIndex += n); // function runs showSlides with index + n as its parameter
}

function currentSlide(n) { // creates function identifying the current slide, using n as the parameter
  showSlides(slideIndex = n); // function runs showSlides with index = to n as the parameter
}

function showSlides(n) { // creates the showSlides function using n as the parameter
  var i; // creates a generic variable to be used as an identifier
  var slides = document.getElementsByClassName("slide"); // sets variable slides = to # of slides
  var indicator = document.getElementsByClassName("indicator"); // sets indicator to # of indicators
  if (n > slides.length) {slideIndex = 1} // if n is greater than the # of slides, index is set to 1
  if (n < 1) {slideIndex = slides.length} // if n is less than 1, set index to # of slides
  for (i = 0; i < slides.length; i++) { // set i=0, and when i is less than # of slides, run the code below and increment i by 1
      slides[i].style.display = "none"; // then hide those slides by setting display to none
  }
  for (i = 0; i < indicator.length; i++) { // when i is = to 0 and less than # of indicators, increment i by 1
      indicator[i].className = indicator[i].className.replace(" active", ""); // and the associated indicators gets the .active class removed from them
  }
  slides[slideIndex-1].style.display = "block"; // display slides
  indicator[slideIndex-1].className += " active"; // make indicator active
}

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img/horse2.jpg");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
