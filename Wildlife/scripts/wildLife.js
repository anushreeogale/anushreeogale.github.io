
var $flag = 0;
var $height = $(".bigRow").height();
var $wWidth = $( window ).width();

function findHeight(){
		
	if($wWidth > 0 && $wWidth < 480){
		
			$(".bigRow").height(100);
			$(".bigRow").css("transition","height 2s 0.5s");
			$height = 100;
		
	}else if($wWidth >= 480 && $wWidth < 650){
		
			$(".bigRow").height(120);	
			$(".bigRow").css("transition","height 2s 0.5s");
			$height = 120;
			
	}else if($wWidth >= 650 && $wWidth < 850){
		
			$(".bigRow").height(155);
			$(".bigRow").css("transition","height 2s 0.5s");
			$height = 155;
				
	}else if($wWidth >= 850 && $wWidth < 1200){
		
			$(".bigRow").height(200);
			$(".bigRow").css("transition","height 2s 0.5s");
			$height = 200;
				
	}else if($wWidth >= 1200){
		
			$(".bigRow").height(225);	
			$(".bigRow").css("transition","height 2s 0.5s");
			$height = 225;
			
	}
}


$( "#lionImg" ).click(function() {
	
	if($height === 0){
		$("#lion").css("display","block");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 1;
		findHeight();
		console.log($wWidth);
		console.log($height);
	}else if($flag === 1){
		$(".bigRow").height(0);
		$height = 0;
	}else{
		$("#lion").css("display","block");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 1;
	}
});

$( "#elephantImg" ).click(function() {

	if($height === 0){
		$("#lion").css("display","none");
		$("#elephant").css("display","block");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 2;
		findHeight();	
	}else if($flag === 2){
		$(".bigRow").height(0);
		$height = 0;
	}else{
		$("#lion").css("display","none");
		$("#elephant").css("display","block");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 2;
	}
	
});

$( "#giraffeImg" ).click(function() {
	
	if($height === 0){
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","block");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 3;
		findHeight();
	}else if($flag === 3){
		$(".bigRow").height(0);
		$height = 0;
	}else{
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","block");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 3;
	}
	
});

$( "#monkeyImg" ).click(function() {
	
	if($height === 0){
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","block");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 4;
		findHeight();
	}else if($flag === 4){
		$(".bigRow").height(0);
		$height = 0;
	}else{
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","block");
		$("#leopard").css("display","none");
		$("#fox").css("display","none");
		$flag = 4;
	}
	
});

$( "#leopardImg" ).click(function() {
	
	if($height === 0){
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","block");
		$("#fox").css("display","none");
		$flag = 5;
		findHeight();
	}else if($flag === 5){
		$(".bigRow").height(0);
		$height = 0;
	}else{
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","block");
		$("#fox").css("display","none");
		$flag = 5;
	}
	
});

$( "#foxImg" ).click(function() {
	
	if($height === 0){
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","block");
		$flag = 6;
		findHeight();
	}else if($flag === 6){
		$(".bigRow").height(0);
		$height = 0;
	}else{
		$("#lion").css("display","none");
		$("#elephant").css("display","none");
		$("#giraffe").css("display","none");
		$("#monkey").css("display","none");
		$("#leopard").css("display","none");
		$("#fox").css("display","block");
		$flag = 6;
	}
	
});



/* Adjusts the height of section two (middle row/bigRow) on page resize*/

$( window ).resize(function() {
	$wWidth = $( window ).width();
	if($height > 0){
		if($wWidth > 0 && $wWidth < 480){
			$(".bigRow").height(100);
		}else if($wWidth >= 480 && $wWidth < 650){
			$(".bigRow").height(120);
		}else if($wWidth >= 650 && $wWidth < 850){
			$(".bigRow").height(155);
		}else if($wWidth >= 850 && $wWidth < 1200){
			$(".bigRow").height(200);
		}else if($wWidth >= 1200){
			$(".bigRow").height(225);
		}
	}
});




