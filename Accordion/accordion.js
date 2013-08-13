$(function() {
	var accordion = $("#accordion");
	var headings = $("h2");
	var paragraphs = $("p");
	paragraphs.not(":first").hide();
	accordion.on("click", "h2", function() {
		var t = $(this);
		var tPara = t.next();
		if(!tPara.is(":visible")) {
			tPara.trigger("showParagraph");
		}
	});
	accordion.on("showParagraph", "p", function() {
		paragraphs.stop(true, true).slideUp(400, "easeInCirc");
		$(this).stop(true, true).slideDown(400, "easeInCirc");
	});
});
