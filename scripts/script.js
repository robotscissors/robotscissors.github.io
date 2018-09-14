$(document).ready(function(){
	var windowHeight = $(window).height(); // get height of window
	var navOffset = $("nav").offset().top;
	
	// need to update the height if the window has changed sizes
	
	$(window).resize(function() {
		windowHeight = $(window).height();
		$(".status").html(windowHeight);
	});
	
	if (windowHeight>600) {
		// add class relative
		$("nav").addClass("relative");
	}
	
	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();
		if (windowHeight>600) {
		// add class relative
		$("nav").addClass("relative");
	}
		$(".status").html(windowHeight);
		if (scrollPosition >= navOffset) {
			$("nav").addClass("fixed");
			//alert("fixed");
		} else {
			$("nav").removeClass("fixed");			
		}
	});
	
});