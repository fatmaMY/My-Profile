$(document).ready(function(){
	makeAjaxReqFav()
	});
 
 function makeAjaxReqFav(e) {
 	var fav=$( "#result" ).load( "https://github.com/fatmaMY.html a.text-bold")
 	fav.addHeader("Access-Control-Allow-Origin", "https://github.com/fatmaMY");

 }

 function onClickFav(e) {
 	$('#fav').click(function(e){
 		$('#result').html('');
		$('#imgLoading').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		makeAjaxReqFav();
		$('#imgLoading').fadeOut();
 }