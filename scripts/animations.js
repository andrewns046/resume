$(document).ready(function(){
	$("#section1").fadeIn();
	$("#section1").click(function() {
		//todo: trigger section load
		$("#objective").show(500);
	});

	$("#section2").fadeIn(1000);
	$("#section2").click(function() {
		$("#education").show(500);
	});
	
	$("#section3").fadeIn(2000);
	$("#section3").click(function() {
		//todo: trigger section load
		$("#experience").show(500);
	});
	
	$("#section4").fadeIn(3000);
	$("#section4").click(function() {
		//todo: trigger section load
		$("#projects").show(500);
	});
	
	$("#section5").fadeIn(4000);
	$("#section5").click(function() {
		//todo: trigger section load
		$("#skills").show(500);
	});
	
	$("#section6").fadeIn(5000);
	$("#section6").click(function() {
		//todo: trigger section load
		$("#associations").show(500);
	});
	
	$("#section7").fadeIn(5000);
	$("#section7").click(function() {
		//todo: trigger section load
		$("#contact").show(500);
	});
});
