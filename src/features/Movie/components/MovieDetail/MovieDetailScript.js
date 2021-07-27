import $ from 'jquery';
$(document).ready(function () {
    $('body').html("<script> $(document).ready(function () { $('.detail__cast').slick({ slidesToShow: 5, slidesToScroll: 2, autoplay: true, autoplaySpeed: 2000, nextArrow: $('.next'), prevArrow: $('.prev'), responsive: [ { breakpoint: 1024, settings: { slidesToShow: 5, } }, { breakpoint: 739, settings: { slidesToShow: 3, } }, ] }); }); </script>")

})