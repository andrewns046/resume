$(document).ready(function(){
	$("#section1").fadeIn();
	$("#section1").click(function() {
		$(".card img").hide();
	});
	$("#section2").fadeIn(1000);
	$("#section2").click(function() {
		$(".card img").show();
	});
	$("#section3").fadeIn(2000);
	$("#section4").fadeIn(3000);
	$("#section5").fadeIn(4000);
	$("#section6").fadeIn(5000);
	$("#section7").fadeIn(5000);
});
