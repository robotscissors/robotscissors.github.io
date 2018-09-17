$(document).ready(function(){
	var windowHeight = $(window).height(); // get height of window
	var navOffset = $("nav").offset().top;
	var scrollPosition = $(window).scrollTop();
	
	// need to update the height if the window has changed sizes
	$(".status").html(600-windowHeight-scrollPosition);
	$(window).resize(function() {
		windowHeight = $(window).height();
	});
	
	//on load ---------------------------------------->
	// window is bigger than 600px height
	if (windowHeight>600) {
		// window is big enough
		// bar should be at bottom of window
		$("nav").addClass("relative");
		$("nav").removeClass("fixed-position-bottom");
	}
	// window is less than 600px high
	if (windowHeight <= 600) {
		//stick it on the bottom
		$("nav").addClass("fixed-position-bottom");
		$("nav").removeClass("relative");
	}
	//on scroll ---------------------------------------->	
	$(window).scroll(function() {
  	var scrollPosition = $(window).scrollTop();
		var windowHeight = $(window).height(); // get height of window
		var navOffset = $("nav").offset().top	
		if (scrollPosition >= navOffset) {
			$("nav").addClass("fixed");
			$("nav").removeClass("fixed-position-bottom")
			$("nav").removeClass("relative");
			$(".status").html("freeze");
		} else {
			
			$(".status").html(600-windowHeight-scrollPosition);
		}
		
	});
});