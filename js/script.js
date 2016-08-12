var sessionNum = "#Session_1"
var paperURL = "http://cvgip2016.csie.ntu.edu.tw/proceeding/papers/"

var scrollToTop = function() {
	$("html, body").animate({ scrollTop: 0 }, "fast");
}

var session_click = function(s) {
    $(sessionNum).css("display", "none");
    $(s).css("display", "block");
    sessionNum = s;
}

var gotoPaper = function(paper) {
    paperURL = paperURL + paper;
    var win = window.open(paperURL, '_blank');
    win.focus();
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
        $("body").css("font-family", "Arial,Microsoft JhengHei,sans-serif");
    }
    // if (navigator.appVersion.indexOf("Mac")!=-1)
    //     console.log("Mac");
});