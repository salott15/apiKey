$("button").click(function(){
	var obj = {
		part: 'snippet',
		key: 'AIzaSyAOvb7L0BTG4nW52groZYy_Hymy-3uPdUc',
		q: $('input').val()
	};
	$.getJSON("https://www.googleapis.com/youtube/v3/search", obj, callback);
});

function callback(data){
	console.log(data);
	for(i=0; i<data.items.length; i++){
		$("div").append("<a href='" + "https://youtube.com/watch?v=" + data.items[i].id.videoId + "'>Click to watch video</a>" + "<br>")
		$("div").append(data.items[i].snippet.title + "<br>")
		$("div").append("<img src= '" + data.items[i].snippet.thumbnails.default.url + "'/>" + "<br>")
	}
}

