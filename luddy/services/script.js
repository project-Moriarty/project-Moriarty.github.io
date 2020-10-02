function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 1400);
	return false;
}

 $(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() < 992) {
	 $('.nav-item').addClass('ml-auto');
    }
 });

 $(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() < 992) {
		$('.nav-item').addClass('ml-auto');
    }
	else {
	$('.nav-item').removeClass('ml-auto');
}
 });