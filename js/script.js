var scrollToTop = function() {
	$("html, body").animate({ scrollTop: 0 });
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    console.log($( window ).height());
    if ( scroll > $( window ).height() + 100 ) {
    	$("#top").addClass("circle-visible")
    }
    else {
    	$("#top").removeClass("circle-visible")
    }
});