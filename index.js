// Sidebar toggle on smaller screens
$(document).ready(function() {
    $(".button-collapse").sideNav();
});

// Rotate icons on expansion
$(".spinny").click(function(){
    $(this).children('.collapsible-header').children('.rotate').toggleClass("down"); 
});

// Smooth scrolling code for nav
$(".smooth-scroll li a").on('click', function(e) {
    // Prevent default anchor click behavior
    e.preventDefault();
    // Store hash
    var hash = this.hash;
    // Animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
 });