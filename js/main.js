jQuery(document).ready(function($) {
	
	// Menu click animation
	$('#openMenu').on('click', function(event) {
		event.preventDefault();
		if ($('.list-navigation').is(':hidden')) {
			$('#layer').fadeIn('slow');
			$('.list-navigation').fadeIn('slow');
		}else{
			$('#layer').fadeOut('slow');
			$('.list-navigation').fadeOut('slow');
		}
	});
	$('.list-navigation li a').on('click', function() {
		$('#layer').fadeOut('slow');
		$('.list-navigation').fadeOut('slow');
	});

	// Button select item
	$('.select-item').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});

	// Scroll navigation
	$('a[href^="#"]').on('click',function (e) {
        e.preventDefault ();        
        var target = this.hash,                    
            $target = $(target); 
        
        $('html, body').stop().animate ({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });

});