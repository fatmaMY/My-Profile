$(document).ready(function(){
	onClickFav();
	onClickCurrent();
	});
 
 function makeAjaxReqFav() {
 	
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
	$.ajax({
		url: 'https://api.github.com/users/fatmaMY/repos?sort=created',
		type: 'GET',
		dataType: 'json'
	}).success(resultHandler)
		
	.fail(function(error){
	 	$('#imgLoading').fadeOut();
	 	$('#error').fadeIn();
 	 });

	}
	
	function resultHandler(data) {
		var data=data.slice(0, 6);
	
		var html=''
	
	$.each(data,function(i,itm){
		html+='<div class="row">'+
		'<ul>'+
		'<li>'+itm.name+'</li?'+
		'</ul>'+
		'</div>'
		
});
	$('#result').append(html);

		}	
	


