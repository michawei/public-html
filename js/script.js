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

$( document ).ready(function() {
    if (navigator.appVersion.indexOf("Win") != -1) {
        $("p").css("font-weight", "initial")
        $("a").css("font-weight", "bold")
    }
    // if (navigator.appVersion.indexOf("Mac")!=-1)
    //     console.log("Mac");
});