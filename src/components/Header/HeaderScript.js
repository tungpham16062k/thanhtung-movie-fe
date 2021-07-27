import $ from 'jquery'
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('navbar--scroll');
        } else {
            $('.navbar').removeClass('navbar--scroll');
        }
    });
});

