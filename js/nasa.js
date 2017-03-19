$(document).ready(function(){
$.ajax({ 
	url: "https://api.nasa.gov/planetary/apod?api_key=LXZnFUPNcwZrPCIHgn2GDBDXSFhIGcxV4HYXGzta",
    context: document.body,
    success: function(data){
           handleData();
        }});

});

function handleData(data) {
	// body...
}