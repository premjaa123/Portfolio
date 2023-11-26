
// Hamburger
const menu = document.querySelector(".menu");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const navBlockMobile = document.querySelectorAll(".nav_block_mobile");
const sideNav = document.querySelector(".sidenav");
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
  if (sideNav.style.display !== "none") {
    sideNav.style.display = "none";
  }
  else{
    sideNav.style.display = "block";
  }

}


// hamburger.addEventListener("click", toggleMenu);

function closeMenuOnClick() {
  menu.classList.remove("showMenu");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
  sideNav.style.display = "block";
}

hamburger.addEventListener("click", toggleMenu);

// Add event listener to each navigation link
navBlockMobile.forEach((navBlock) => {
  navBlock.addEventListener("click", closeMenuOnClick);
});

// function myGeeks() { 
//   document.querySelector(".nav_block_mobile").onclick = function() { 
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } 
// } 


// Sticky Header
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sidenav = document.getElementById("sidenav");
var headermob = document.getElementById("head");
var sticky = header.offsetTop;
var stickysidenav = sidenav.offsetTop;
var stickymob = headermob.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    sidenav.classList.add("stickysidenav");
    headermob.classList.add("stickymob");
  } else {
    header.classList.remove("sticky");
    sidenav.classList.add("stickysidenav");
    headermob.classList.add("stickymob");
  }
}



// window.onscroll = function() {myFunction()};
// var header = document.getElementById("sidenav");
// var sticky = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("stickysidenav");
//   } else {
//     header.classList.remove("stickysidenav");
//   }
// }

//Navigation Active
// var header = document.getElementById("myHeader");
// var btns = header.getElementsByClassName("nav_items");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
let scrollY = window.pageYOffset;
function navHighlighter() {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation_block a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation_block a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


function submitForm() {
  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // You can perform any additional validation or processing here

  // Submit form data to Formspree (or your desired endpoint)
  fetch('https://formspree.io/f/xdorredr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Name: name, Email: email, Message: message }),
  })
  .then(response => response.json())
  .then(data => {
    // Handle successful submission
    console.log('Form submitted successfully:', data);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  })
  .catch(error => {
    // Handle submission error
    console.error('Error submitting form:', error);
  });
}