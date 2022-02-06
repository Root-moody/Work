var nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-dark", "shadow");
    } else {
        nav.classList.remove("bg-dark", "shadow");
    }
});

$(document).ready(settingdown());

function settingdown() {
    $(".toggles1").hide();

    $(".more_clarity1").click(function(e) {
        $(".toggles1").slideToggle();
        e.preventDefault();
    });

    $(".toggles2").hide();

    $(".more_clarity2").click(function(e) {
        $(".toggles2").slideToggle();
        e.preventDefault();
    });

    $(".toggles3").hide();

    $(".more_clarity3").click(function(e) {
        $(".toggles3").slideToggle();
        e.preventDefault();
    });

    $(".toggles4").hide();

    $(".more_clarity4").click(function(e) {
        $(".toggles4").slideToggle();
        e.preventDefault();
    });

    $(".toggles5").hide();

    $(".more_clarity5").click(function(e) {
        $(".toggles5").slideToggle();
        e.preventDefault();
    });
}