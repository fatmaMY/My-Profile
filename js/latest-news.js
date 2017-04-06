$(document).ready(function(e){
	makeAjaxReq();
     // testResults();
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
function resultHandler(data){
     var html=''
     html+='<div class="row">'
     html+='<div class="col-md-12">'
     html+=' <div class="thumbnail">'
     html+=' <div class="caption">'
     $.each(data.articles,function(i,itm){
          if(itm.publishedAt != null && itm.urlToImage != null){
               html+=	' <div class="thumbnail">'
               html+=' <div class="caption">'
               html+='<h3 id="date">'+itm.publishedAt.replace(/\T.*/g,"")+'</h3>'
               html+='<h3 id="explanation"><a href="'+itm.url+'" target="_blank">'+itm.title+'</a></h3>'
               html+=' <p>'+itm.description+'</p>'
               html+='<img src="'+itm.urlToImage+'">'
               html+='</div>'
               html+='</div>'
               html+='</div>'
               html+= '</div>'

          }});
     $('#result').html(html);
}
