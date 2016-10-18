$(document).ready(function() {
	var clientLat= 35.2828;
	var clientLon = -120.6596;
	$("#location").empty().append("<h3 class = 'text-center '>Your Current Location </h3>")
	$("#farenheit").on("click", function(){
		$(".temperature").empty().append("<h3 class = 'text-center'>Temp in farenheit</h3>");
	});
	$("#celsius").on("click", function(){
		$(".temperature").empty().append("<h3 class = 'text-center'>Temp in celsius</h3>");
	});
/*var weatherJSON = $.ajax({
	url: "http://api.openweathermap.org/data/2.5/weather?lat="+clientLat+"&lon="+clientLon,
	type: "GET",
	dataType: "json",
	success: function(){$("#jsonTest").empty().append("<h3>"+weatherJSON+"</h3>"); },
	beforeSend: setHeader
});*/

var weatherJson = $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+clientLat+"&lon="+clientLon, "APPID=77488f9dd9ff84cf5e598bdf84999e77", function(){
	$("#jsonTest").html(JSON.stringify(weatherJson));
	});
});