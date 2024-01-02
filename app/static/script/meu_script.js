$(function(){
    var nav = $('#menu');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > ($(window).height() - 55)) { 
            nav.addClass("menu-header");
            $('body').css('padding-top', 0);
        } else {
            nav.removeClass("menu-header");
            $('body').css('padding-top', 0); 
        } 
    }); 
});