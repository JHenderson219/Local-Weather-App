$(document).ready(function() { 
/*$.getJson("api.openweathermap.org/data/2.5/weather?lat="+clientLat+"&lon="+clientlon,"1edd9d579e483c8e11d172bd53b1ac31",function(){	
	});*/
	$("#farenheit").on("click", function(){
		$("#temperature").html("Temp in farenheit");
	});
	$("#celsius").on("click", function(){
		$("#temperature").html("Temp in celsius");
	});
	var weatherJson = "";
	$.getJson("api.openweathermap.org/data/2.5/weather?lat="+"35"+"&lon="+"35","1edd9d579e483c8e11d172bd53b1ac31",function(){
	});
});