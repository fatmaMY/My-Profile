$(document).ready(function(){
	makeAjaxReqCurrent()
	onClickFav();
	
});

function makeAjaxReqFav() {
	
}


function onClickFav(e) {
	$('#fav').click(function(e){
		$('#current').fadeOut('');
		$('#favorite').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		makeAjaxReqFav();
		
		
	});
}

function makeAjaxReqCurrent() {
	$.ajax({
		url: 'https://api.github.com/users/fatmaMY/repos?sort=created',
		type: 'GET',
		dataType: 'json'
	}).success(resultHandler)

	.fail(function(error){
		$('#error').fadeIn();
	});

	
}

function resultHandler(data) {
	var data=data.slice(0, 6);
	var html=''
	$.each(data,function(i,itm){
		html+='<div class="row">'+
		'<ul>'+
		'<li><a href="'+itm.html_url+'">'+itm.name+'</a></li>'+'Last update at '+itm.pushed_at.replace(/\T.*$/g,"")+
		'</ul>'+
		'</div>'
		
	});
	$('#current').append(html);

}	
