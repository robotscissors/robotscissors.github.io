$(document).ready(function(){
	
	var navOffset = $("nav").offset().top;
	$("status").html(navOffset);
	$(window).scroll(function() {
		
		var scrollPosition = $(window).scrollTop();

		$(".status").html(scrollPosition);
		if (scrollPosition >= navOffset) {
			$("nav").addClass("fixed");
			alert("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	});
	
});