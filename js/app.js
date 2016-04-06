// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$('.menu .button, .reveal-modal-bg').on('click',function(event) {
	if( $(event.target).attr('class') == 'reveal-modal-bg' || $(event.target).attr('class') == 'small button') {
		$('.reveal-modal-bg').fadeToggle();
		$('.nav').toggleClass('open');		
	}
});