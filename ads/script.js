$(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 1281) {
     $('.heading-text').addClass('text-center');
     $('.pre-heading-text').addClass('text-center');
    }
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 1281) {
        $('.heading-text').addClass('text-center');
        $('.pre-heading-text').addClass('text-center');
    }
	else {
    $('.heading-text').removeClass('text-center');
    $('.pre-heading-text').removeClass('text-center');
}
 });


 $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 1831) {
     $('.economy-heading').addClass('text-center');
    }
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 1281) {
        $('.economy-heading').addClass('text-center');
    }
	else {
        $('.economy-heading').removeClass('text-center');
}
 });


function slowScroll (id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset
    }, 1100);
    return false;
}
