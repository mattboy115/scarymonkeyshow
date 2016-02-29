$(document).ready(function() {
    if($(window).width() > 750){
        $('.nav > li').mouseenter(function() {
            $(this).children('.nav-content').slideDown(200);
        });

        $('.nav > li').mouseleave(function() {
            $(this).children('.nav-content').slideUp(200);
        });
    }
});
