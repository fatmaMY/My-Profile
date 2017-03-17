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
			Authorization: "token "+"76c016f0e7fdd5dc25dfc7d89efdf0452c067b6d"
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

