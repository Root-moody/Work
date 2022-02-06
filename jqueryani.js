$(document).ready(function() {
    // $(window).scroll(function() {
    //     if ((this).scrollTop < 40) {
    //         $('.top_upicon').fadeIn();
    //     } else {
    //         $('.top_upicon').fadeOut();
    //     }
    // });
    $('.top_upicon').click(function() {
        $('html,body').scrollTop(0);
    });
});