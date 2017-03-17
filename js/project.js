$(document).ready(function(){
	onClickFav();
	onClickCurrent();
	});
 
 function makeAjaxReqFav() {
 	//var fav=$( "#result" ).load( "https://github.com/fatmaMY.html a.text-bold")
 	// .fail(function(error){
		// 	$('#imgLoading').fadeOut();
		// 	$('#error').fadeIn();
		// 	});
 	$.ajax({
		url: 'https://github.com/fatmaMY',
		type: 'get',
		dataType: 'html',
		headers: {
			Authorization: "token "+token
		},
		 success: function(data){
      $('div.pinned-repo-item-content').html($(data).find('div.pinned-repo-item-content span a.text-bold').html());
   }
		
		
	 }).fail(function(error){
	 	$('#imgLoading').fadeOut();
		 	$('#error').fadeIn();
 	});
 }


 function onClickFav(e) {
 	$('#fav').click(function(e){
 		$('#result').html('');
		$('#imgLoading').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		makeAjaxReqFav();
		$('#imgLoading').fadeOut();
       
 });
}
function onClickCurrent(e) {
	$('#current').click(function(e){
 		$('#result').html('');
		$('#imgLoading').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		makeAjaxReqCurrent()
		$('#imgLoading').fadeOut();
       
 });
}

function makeAjaxReqCurrent() {
	// body...
}

