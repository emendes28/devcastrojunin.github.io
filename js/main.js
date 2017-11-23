jQuery(document).ready(function($) {
	$('.slides .container').cycle({
	    speed: 500,
	    fx: "fade",
	    timeout: 10000,
	    slides: "> section",
	    pager:   '#nav',
	    next: "#next",
	    prev: "#prev"
	});

	$('.select-item').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});
});