
$( ".dnArw" ).click(function() {
	$(".dnArw").css( "display","none" );
	$(".upArw").css( "display","block" );
	$( ".vNav" ).css( "display","block" );
});

$( ".upArw" ).click(function() {
	
	$(".upArw").css( "display","none" );
	$(".dnArw").css( "display","block" );
	$( ".vNav" ).css( "display","none" );
});



$( window ).resize(function() {
	var $w = $( window ).width();
	if($w > 650){
		$( ".vNav" ).css( "display","none" );
	}
});
