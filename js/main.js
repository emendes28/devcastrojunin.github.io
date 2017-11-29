jQuery(document).ready(function($) {
	
	// Show and hide menu bar in scroll
	var distance = $('section#sites').offset().top,
    	$window = $(window);

	$window.scroll(function() {
	    if ( $window.scrollTop() >= distance ) {
	        $('div.menu').removeClass('menu-hidden');
	    }else{
	    	$('div.menu').addClass('menu-hidden');
	    }
	});

	// Show and hide menu list
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

	// Scroll navigation click menu
	$('a[href^="#"]').on('click',function (e) {
        e.preventDefault ();        
        var target = this.hash,                    
            $target = $(target); 

		if (target != '') {
	        $('html, body').stop().animate ({
	            'scrollTop': $target.offset().top
	        }, 1000, 'swing');			
		}                   
    });

	// Button select item
	$('.select-item').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});

	// Delete item select - Modal
	$('i.delete-item').on('click',function (e) {
        e.preventDefault ();        
        var res = confirm('Deseja realmente excluir esse item?');

        if (res == true) {
        	$(this).closest('li').remove();
			count_items();
        }
    });

	// Count items in list modal
	function count_items(){
		var items = $('#itemsSelected li').length;
		$('.count-selected span').text(items);
	}
	count_items();


});
