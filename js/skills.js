$(document).ready(function(){
 onClickMySkills();
});

function onClickMySkills() {
	$('#skillsList').click(function(e){
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
	$.get("./skills.json",function(response){
     $("#respond").append(response);
     console.log(response)
  });
	
}