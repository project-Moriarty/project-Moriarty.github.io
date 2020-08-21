function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 1100);
	return false;
}

$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>1080){
			$('#arrow-slider-up').fadeIn(600)
		}else{
			$('#arrow-slider-up').fadeOut(600)
		}
	});
});