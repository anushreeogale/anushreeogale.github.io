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

$( document ).on( 'click', function ( e ) {
    if ( $( e.target ).closest( elem ).length === 0 ) {
        $overlay.hide();
    }
});

$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $overlay.hide();
    }
});