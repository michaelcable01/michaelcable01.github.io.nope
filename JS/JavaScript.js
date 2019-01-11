
window.onload = function() {
init();
carousel();
}
function init(){
 console.log('init fired');

}
var myIndex = 0;
	 	
function carousel() {
	
  var i;
  var x = document.getElementsByClassName("sliderImage");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 

}

var slideIndexProd = 1;

showDivs(slideIndexProd);
function plusDivs(n) {
  showDivs(slideIndexProd += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("ProdViewer");
  if (n > x.length) {slideIndexProd = 1} 
  if (n < 1) {slideIndexProd = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndexProd-1].style.display = "block"; 
} 

function myFunction() {
  document.getElementById("myDropdown-colour").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var Bikenum = 1;

showDivs(Bikenum);
function changeColour(n) {
  showDivs(Bikenum = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("bikeColour");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[Bikenum-1].style.display = "block"; 
} 






 

   