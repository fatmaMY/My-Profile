$(document).ready(function(){
 onClickMySkills();
});

function onClickMySkills() {
	$('#skillsList').click(function(e){
		$(".list-group").fadeIn();
		e.preventDefault();
		$('#respond').html('');
		makeAjaxReqSkills();
	});

	 $('.course').on('click', function(){
  //   $(this).find('.detail').slideToggle();
  // });

  // $('.course .delete').on('click', function(event){
  //   alert("about to delete");
  // event.stopPropagation();

  // });
});
}
function makeAjaxReqSkills() {
$.get("./skills.json",function(data){
     console.log(data)
     var html='';
     $.each(data.skills,function(i,res){
     	html+='<div class="list-group">'+
        '<a href="#" class="list-group-item list-group-item-info" >'+res.name+'</a>'+
        '</div>'

  });
	$('#respond').append(html);
	});
}