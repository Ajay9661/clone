//nav bar 
 window.onscroll = function() {
   let currentScrollPos = window.pageYOffset;
   let navbar = document.querySelector(".navbar");
   if (currentScrollPos === 0) {
     navbar.classList.add("hidden");
   } else {
     navbar.classList.remove("hidden");
   }
 };
 document.addEventListener("DOMContentLoaded", function() {
   document.querySelector(".navbar").classList.add("hidden");
 });

 // Collapse navbar on link click (for mobile)
 document.querySelectorAll('.navbar-nav .nav-link').forEach(function(navLink) {
     navLink.addEventListener('click', function() {
         if (window.innerWidth < 992) {
             $('.navbar-collapse').collapse('hide');
         }
     });
 });

 // Close navbar when clicking outside on mobile
 $(document).on('click', function(event) {
     var clickover = $(event.target);
     var $navbar = $(".navbar-collapse");
     var _opened = $navbar.hasClass("show");
     if (_opened === true && !clickover.hasClass("navbar-toggler")) {
         $navbar.collapse('hide');
     }
 });

 // Close navbar on navbar-toggler click (for mobile)
 $('.navbar-toggler').on('click', function () {
     var $navbar = $(".navbar-collapse");
     if ($navbar.hasClass("show")) {
         $navbar.collapse('hide');
     }
 });
// scroller
function scrollLeft() {
    const container = document.querySelector('.gallery-container');
    container.scrollBy({ 
        left: -300, // Adjust this value based on the width of your items
        behavior: 'smooth' 
    });
}

function scrollRight() {
    const container = document.querySelector('.gallery-container');
    container.scrollBy({ 
        left: 300, // Adjust this value based on the width of your items
        behavior: 'smooth' 
    });
}
