$(document).ready(function() {  
	
	var contactID = $('#contact');
	var footer = $(contactID).find('footer')	
	var modals = $('.portfolio-modal').children();
	
	$('.footer-below').find('.light-btn').on('click', function() {
		
		//removes dark theme		
		$(contactID).siblings().removeClass('dark-theme');
		$(contactID).removeClass('dark-theme');
		$(modals).removeClass('dark-theme');
		
		// makes most sections have light theme
		$(contactID).siblings().addClass('light-theme');
		$(contactID).addClass('light-theme');
		//makes footer have light blue
		$(footer).children().addClass('blue-theme');
		// makes the top nav div light blue 
		$(contactID).parent('body').find('.navbar').addClass('blue-theme');
	});
	
	//event handler for dark button
	$('.footer-below').find('.dark-btn').on('click', function() {

		//removes light theme
		$(contactID).siblings().removeClass('light-theme');
		$(contactID).removeClass('light-theme');
		$(contactID).parent('body').find('.navbar').removeClass('blue-theme');
		$(footer).children().removeClass('blue-theme');
		
		//enables dark theme in modals, sections and this parent
		$(contactID).addClass('dark-theme');
		$(contactID).siblings().addClass('dark-theme');
		$(modals).addClass('dark-theme');
	});
});


