$(document).ready(function(e){
	makeAjaxReq();
	});

function makeAjaxReq(){
	$.ajax({ 
		url: "https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=c25abec4712b4d6d9594471ce7a7e998",
		type: 'GET',
		dataType: 'json'
	}).success(resultHandler)

	.fail(function(error){
		$('#error').fadeIn();
	});
}