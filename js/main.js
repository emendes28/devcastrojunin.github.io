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
			$('.menu').css({
				'height' : '100%',
				'overflow' : 'scroll'
			});
			$('.list-navigation').fadeIn('slow');
			$('.list-navigation').closest('body').css('overflow', 'hidden');
		}else{
			$('#layer').fadeOut('slow');
			$('.list-navigation').fadeOut('slow');
			$('.menu').css({
				'height' : 'auto',
				'overflow' : 'visible'
			});
			$('.list-navigation').closest('body').css('overflow', 'visible');
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
		var prod_name = $(this).closest('section').data('prod-name'),
			prod_id = $(this).closest('section').data('prod-id'),
			_html = '<li id="'+ prod_id +'">'+ prod_name +'<i class="fa fa-trash-o delete-item" aria-hidden="true"></i></li>';

		if (!$(this).hasClass('active')) {
			$('#itemsSelected').append(_html);
			count_items();
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');

			$('#itemsSelected li').each(function(index, el) {
				var prod_modal_id = $(el).attr('id');

				if (prod_modal_id == prod_id) {
					$('#itemsSelected li#'+ prod_id).remove();
					count_items();
				}
			});
		}
	});

	// Delete item select - Modal
	$(document).on('click', 'i.delete-item', function () {      
        var res = confirm('Deseja realmente excluir esse item?');

        if (res == true) {
			var prod_id = $(this).closest('li').attr('id');
			$("section.slides").find("[data-prod-id='"+ prod_id +"']").find('.select-item').removeClass('active');
        	$(this).closest('li').remove();
			count_items();
        }
    });

	// Count items in list modal
	function count_items(){
		var items = $('#itemsSelected li').length;

		if (items > 0) {
			$('.count-selected span').text(items);
			$('.count-selected').css('transform', 'translateY(0)');	
		}else{
			$('.count-selected').css('transform', 'translateY(100px)');
			$('.fancybox-close-small').trigger('click');				
		}

		if(items == 1 && $('.select-item').hasClass('active') == false){
			alert("Tooltip devera ser criado para substituir esse alert.");
		}
	}
	count_items();

	AOS.init();
});