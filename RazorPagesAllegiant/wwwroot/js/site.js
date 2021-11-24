// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {  // $(document).ready shorthand
    $('.fadeInID').fadeIn('slow');
});

$(document).ready(function ()
{
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        var bottom_of_window = $(this).scrollTop() + $(this).innerHeight();
        /* Check the location of each desired element */
        $('.fadeIn').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();

            if ($(this).hasClass("timelineContainer")) 
            {
                if (bottom_of_window > bottom_of_object / 1.3) {

                    $(this).animate({ 'opacity': '1' }, 1000);

                }
            }

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                if ($(this).css("opacity") == 0) {
                    $(this).animate({ 'opacity': '1' }, 1000);
                }

            }
            else {
                if ($(this).css("opacity") == 1) {
                    $(this).animate({ 'opacity': '0' }, 1000);
                }
            }
        });

    }).scroll();

});