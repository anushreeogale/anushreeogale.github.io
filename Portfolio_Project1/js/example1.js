
function tabs(tabs) {
	
	var screen_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	if(screen_width > 769){
		document.getElementById('tabs1').style.display = 'none';
		document.getElementById('tabs2').style.display = 'none';
		document.getElementById('tabs3').style.display = 'none';
		document.getElementById('tabs4').style.display = 'none';
		document.getElementById('tabs5').style.display = 'none';
		document.getElementById('li_tabs1').setAttribute("class", "");
		document.getElementById('li_tabs2').setAttribute("class", "");
		document.getElementById('li_tabs3').setAttribute("class", "");
		document.getElementById('li_tabs4').setAttribute("class", "");
		document.getElementById('li_tabs5').setAttribute("class", "");
		document.getElementById(tabs).style.display = 'block';
		document.getElementById('li_'+tabs).setAttribute("class", "active");
	}
}


function tab(tab) {
	
	var screen_width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	if(screen_width > 769){
		document.getElementById('tab1').style.display = 'none';
		document.getElementById('tab2').style.display = 'none';
		document.getElementById('tab3').style.display = 'none';
		document.getElementById('li_tab1').setAttribute("class", "");
		document.getElementById('li_tab2').setAttribute("class", "");
		document.getElementById('li_tab3').setAttribute("class", "");
		document.getElementById(tab).style.display = 'block';
		document.getElementById('li_'+tab).setAttribute("class", "active");
	}
	
}

$(window).resize(function() {
	   if ($(this).width() < 769) {
		   document.getElementById('tab1').style.display = 'none';
		   document.getElementById('tab2').style.display = 'none';
		   document.getElementById('tab3').style.display = 'none';
		   
		   document.getElementById('tabs1').style.display = 'none';
		   document.getElementById('tabs2').style.display = 'none';
		   document.getElementById('tabs3').style.display = 'none';
		   document.getElementById('tabs4').style.display = 'none';
		   document.getElementById('tabs5').style.display = 'none';
	   }
	   else{
		   document.getElementById('tab1').style.display = 'block';
		   document.getElementById('tabs1').style.display = 'block';
	   }
});
