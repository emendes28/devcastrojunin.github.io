jQuery(document).ready(function($) {
	$('.slides').cycle({
	    speed: 600,
	    manualSpeed: 100,
	    fx: "fade",
	    timeout: 2000,
	    slides: "> section",
	    pager:   '#nav',
	    next: "#next",
	    prev: "#prev"
	});
});