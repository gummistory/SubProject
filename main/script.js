// menu bar 
$(document).ready(function() {
    $(".nav-menu").hover(function() {
        $(this).find(".submenu").stop().slideDown(200);
    }, function() {
        $(this).find(".submenu").stop().slideUp(200);
    });
});

