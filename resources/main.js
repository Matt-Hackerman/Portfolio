window.onscroll = function() {myFunction()};

var findme = document.getElementById("findme");
var sticky = findme.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    findme.classList.add("sticky")
  } else {
    findme.classList.remove("sticky");
  }
}