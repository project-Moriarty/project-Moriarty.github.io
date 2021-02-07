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


$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>420){
            $('.community-img').addClass('anim');
            $('.community-heading').addClass('anim');
            $('.community-pre-heading').addClass('anim');
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>1120){
            $('.economy-img').addClass('anim');
            $('.economy-heading').addClass('anim');
            $('.economy-pre-heading').addClass('anim');
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>1820){
            $('.atmosphere-img').addClass('anim');
            $('.atmosphere-heading').addClass('anim');
            $('.atmosphere-pre-heading').addClass('anim');
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>2420){
            $('.creation-img').addClass('anim');
            $('.creation-heading').addClass('anim');
            $('.creation-pre-heading').addClass('anim');
		}
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>3020){
            $('.advantages').addClass('anim');
		}
	});
});