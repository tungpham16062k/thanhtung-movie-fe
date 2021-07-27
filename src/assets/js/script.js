import $ from 'jquery';
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('navbar--scroll');
        } else {
            $('.navbar').removeClass('navbar--scroll');
        }
    });

    $('.form__control').each(function () {
        var input = $(this);
        input.keyup(function () {
            var value = $(this).val();
            if (value.trim()) {
                input.addClass('form__control--active')
            } else {
                if (input.hasClass('form__control--active')) {
                    input.removeClass('form__control--active')
                }
            }
        })
    })
});

