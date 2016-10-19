$(document).ready(function() {
	
	var clientLat;
	var clientLon;
	if (Navigator.geolocation) {
  		Navigator.geolocation.getCurrentPosition(function(position) {
    	clientLat = position.coords.latitude;
    	clientLon = position.coords.longitude;
    	console.log(clientLat);
		console.log(clientLon);
  		});
  		}else{
  			alert("Failed to get position!");	
  		}
	
	
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
setPos;
console.log(clientLat);
console.log(clientLon);
var weatherJson = $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+clientLat+"&lon="+clientLon, "APPID=77488f9dd9ff84cf5e598bdf84999e77", function(){
	$("#temperature").html("<h3 class= 'text-center animated fadeIn'>" +"99"+"</h3>"); // CHANGE 99 TO VAR FOR TEMP
	$("#location").html("<h3 class='text-center animated fadeIn'>"+ "Location_Name" + "</h3>"); //CHANGE LOCATION_NAME TO VAR FOR LOCATION
	});
});