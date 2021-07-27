import $ from 'jquery';
$(document).ready(function () {
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

