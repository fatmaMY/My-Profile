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
 	// $.ajax({
		// url: 'https://github.com/fatmaMY',
		// type: 'get',
		// dataType: 'html',
		// headers: {
		// 	Authorization: "token "+token
		// },
		//  success: function(data){
  //     $('div.pinned-repo-item-content').html($(data).find('div.pinned-repo-item-content span a.text-bold').html());
  //  }
		
		
	 // }).fail(function(error){
	 // 	$('#imgLoading').fadeOut();
		//  	$('#error').fadeIn();
 	// });
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
		url: 'https://api.github.com/users/fatmaMY/repos',
		type: 'GET',
		dataType: 'json'
	}).success(function(data){
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
})
	.fail(function(error){
	 	$('#imgLoading').fadeOut();
	 	$('#error').fadeIn();
 	 });

	}
		
	


