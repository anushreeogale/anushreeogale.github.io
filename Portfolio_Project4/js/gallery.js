var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$("#overlay_container").append($overlay);


$("#imagesContainer a").click(function( e ){
	e.preventDefault();
	var href = $(this).attr("href");
	
	$image.attr("src", href);
	$("#imagesContainer img").css("opacity","0.3");
	$overlay.show();
	
	var caption_text = $(this).children("img").attr("alt");
	$caption.text(caption_text);
});

$overlay.click(function(){
	$("#imagesContainer img").css("opacity","1");
	$overlay.hide();
});