// stiky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//end stiky navbar

// navbar links
// Add active class to the current button (highlight it)
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


// start form validation
let fname=document.getElementById("name"),
femail=document.getElementById("email"),
fphone=document.getElementById("phone"),
fmessage=document.getElementById("message"),
ficon=document.querySelectorAll("#icon")
ferror=document.querySelectorAll(".error");

var send=document.getElementById('send');

send.onclick=function(){
    if(fname.value == "" ){
        fname.style.borderBottom="1px solid red";
        ficon[0].style.display="block";
        ferror[0].style.display="block";
    }
    else if(femail.value=="") {
        femail.style.borderBottom="1px solid red";
        ficon[1].style.display="block";
        ferror[1].style.display="block";
    }
    else if(fphone.value==""){
        fphone.style.borderBottom="1px solid red";
        ficon[2].style.display="block";
        ferror[2].style.display="block";
    }
    else if(fmessage.value==""){
        fmessage.style.borderBottom="1px solid red";
        ficon[3].style.display="block";
        ferror[3].style.display="block";
    }
}

//resize label form

fname.onclick=function(){
    document.getElementById("lname").classList.toggle("size");
}

femail.onclick=function(){
    document.getElementById("lemail").classList.toggle("size");
}

fphone.onclick=function(){
    document.getElementById("lphone").classList.toggle("size");
}

fmessage.onclick=function(){
    document.getElementById("lmessage").classList.toggle("size");
}