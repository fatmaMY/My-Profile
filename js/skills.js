$(document).ready(function(){
	onClickMySkills();
});

function onClickMySkills() {
	$('#skillsList').click(function(e){
		$(".list-group").fadeIn("slow");
		e.preventDefault();
		$('#respond').html('');
		makeAjaxReqSkills();
	});
}

function makeAjaxReqSkills() {
	$.get("./skills.json",function(data){
     //console.log(data)
     var html='';
     $.each(data.skills,function(i,res){
     	html+='<div class="list-group">'+
     	'<a href="#" class="list-group-item active">'+
     	'<h4 class="list-group-item-heading">'+res.name+'</h4>'+
     	'<p class="list-group-item-text">'+res.description+'</p>'+
     	'</a>'+
     	'</div>'

     });
     $('#respond').append(html);
 });
}
