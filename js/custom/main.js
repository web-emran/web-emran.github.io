function filter(e) {
    for (hide = document.getElementsByClassName("cate-active"), i = 0; i < hide.length; i++) hide[i].style.display = "none";
    let a = document.getElementsByClassName(e);
    for (i = 0; i < hide.length; i++) a[i].style.display = "block"
}
$((function () {
    $(".navbar-dropdown a").click((function () {
        $(this).next().toggle(), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show())
    }))
})), $(".dropdown-indicator").on("click", (function () {
    $(".dropdown-indicator").removeClass("active"), $(this).addClass("active")
})), $(".navbar-toggle").on("click", (function () {
    $(".navbar-slide").addClass("active"), $(".body").addClass("active"), $(".navbar-cross").on("click", (function () {
        $(".navbar-slide").removeClass("active"), $(".body").removeClass("active")
    }))
})), $(window).on("scroll", (function () {
    $(this).scrollTop() > 150 ? $(".navbar-part").addClass("navbar-fixed") : $(".navbar-part").removeClass("navbar-fixed")
})), $(window).on("scroll", (function () {
    $(this).scrollTop() > 1e3 ? $(".back2top-btn").show() : $(".back2top-btn").hide()
})), $(".cate-btn").on("click", (function () {
    $(".cate-btn").removeClass("active"), $(this).addClass("active")
})), jQuery(document).ready((function (i) {
    var e = i(".faq-ans").hide();
    e.first().show(), i(".faq-que").click((function () {
        var a = i(this);
        e.slideUp(), a.next().slideDown()
    }))
})), $(".menu").on("click", (function () {
    $(".menu").removeClass("active"), $(this).addClass("active")
})), $(".page-link").on("click", (function () {
    $(".page-link").removeClass("active"), $(this).addClass("active")
}));
// Preloader JS
function preloader(){
    if( $('.preloader').length ){
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.preloader').delay(50).fadeOut('slow');  
        })   
    }
}
preloader();