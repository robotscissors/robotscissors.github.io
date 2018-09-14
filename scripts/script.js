$(document).ready(function(){
	var windowHeight = $(window).height(); // get height of window
	var navOffset = $("nav").offset().top;
	
	// need to update the height if the window has changed sizes
	
	$(window).resize(function() {
		windowHeight = $(window).height();
		$(".status").html(windowHeight);
	});
	
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		$(".status").html(windowHeight);
		if (scrollPosition >= navOffset) {
			$("nav").addClass("fixed");
			//alert("fixed");
		} else {
			$("nav").removeClass("fixed");			
		}
	});
	
});