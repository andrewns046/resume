$(document).ready(function(){
	$("#section1").fadeIn();
	$("#section1").click(function() {
		//todo: trigger section load
		$(".jumbotron").hide();
		$("#education").hide();
	});
	$("#section2").fadeIn(1000);
	$("#section2").click(function() {
		$("#education").show();
	});
	$("#section3").fadeIn(2000);
	$("#section3").click(function() {
		//todo: trigger section load
	});
	$("#section4").fadeIn(3000);
	$("#section4").click(function() {
		//todo: trigger section load
	});
	$("#section5").fadeIn(4000);
	$("#section5").click(function() {
		//todo: trigger section load
	});
	$("#section6").fadeIn(5000);
	$("#section6").click(function() {
		//todo: trigger section load
	});
	$("#section7").fadeIn(5000);
	$("#section7").click(function() {
		//todo: trigger section load
	});
});
