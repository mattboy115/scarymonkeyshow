$(document).ready(function() {
    $('.nav > li').mouseenter(function() {
        $(this).children('.nav-content').slideDown(200);
    });

    $('.nav > li').mouseleave(function() {
        $(this).children('.nav-content').slideUp(200);
    });
});
