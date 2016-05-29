
var lastPage = "content_1";

var changePage = function(nextPage){
	console.log(nextPage);
	$("#" + lastPage).css("display", "none");
	$("#" + nextPage).css("display", "block");
	lastPage = nextPage;
}