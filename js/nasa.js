$(document).ready(function(e){
$.ajax({ 
	url: "https://api.nasa.gov/planetary/apod?api_key=LXZnFUPNcwZrPCIHgn2GDBDXSFhIGcxV4HYXGzta",
    context: document.body,
    success: function(data){
           handleData(data);

        }});
});

function handleData(data) {
     console.log(data.url)
   var html='<div class="row">'+
     	'<div class="col-lg-12">'+
          ' <div class="thumbnail">'+
 
     	//'<a href="'+data.url+'" target="_blank" title="Watch"> <img class="img-thumbnail re-sized" src='+data.url+'></a>'+
     	' <div class="caption">'+
     	'<h3 id="date">'+data.date+'</h3>'+
     	'<h3 id="explanation">'+data.title+'</h3>'+
     	' <p>'+data.explanation+'</p>'+
     	'</div>'+
     	'</div>'+
     	'</div>'+
     	'</div>'

			$('#video').attr('src', data.url);

	     
     $('#result').append(html);
 }
