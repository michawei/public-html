var scrollToTop = function() {
	$("html, body").animate({ scrollTop: 0 }, "fast");
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if ( scroll > $( window ).height() + 100 ) {
    	$("#top").addClass("circle-visible")
    }
    else {
    	$("#top").removeClass("circle-visible")
    }
});