$(function() {
	var req = $.ajax({ 
		url: "http://api.dribbble.com/shots/1196240",
		dataType: "jsonp"
		});
	req.done(function(data) { 
		//console.log(data);
		var wrapperDiv = $("<div />", {
			"class": "wrapper"
		});
		
		var title = $("<h2 />", {
			text : data.title
		});
		
		var img = $("<img />", {
			alt: data.title,
			src: data.image_url
		});
		
		var user = $("<a />", {
			text: data.player.name,
			href: data.player.url
		});
		
		wrapperDiv
			.append(title)
			.append(img)
			.append(user);
		
		$("body").append(wrapperDiv);
	});
	/*$.ajax({
		"url": "ajax.json",
		"type": "get",
		"dataType": "json",
		"success": function(data) {
			console.log(data);
		},
		"error": function(jqXHR, status, error) {
			console.log("status:", status, "error:", error);
		}
	});*/
});
