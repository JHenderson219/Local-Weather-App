$(document).ready(function() {
	var tempK;
	var tempF;
	var tempC;
	var location;
	var icon;
	var weatherDescriptor; 
	var weatherKeys;
	var clientLat;
	var clientLon;
	var weatherJson;
	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
    	clientLat = position.coords.latitude;
    	clientLon = position.coords.longitude;
    	//FIX MEEE
  		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+clientLat+"&lon="+clientLon, "APPID=77488f9dd9ff84cf5e598bdf84999e77", function(weatherJson){
			console.log(Object.keys(weatherJson));
			tempK = weatherJson.main.temp;
			tempF = Math.round(tempK*1.8 - 459.67);
			tempC = Math.round(tempK - 273.15);
			location = weatherJson.name;
			icon = weatherJson.weather[0].icon;
			weatherDescriptor = weatherJson.weather[0].description;
			console.log (weatherJson);
			console.log(tempK);
			console.log(location);
			console.log(icon);
			console.log(weatherDescriptor);
			$("#location").html("<h3 class = 'text-center animated fadeIn'>"+location+"</h3>");	
			$("#temperature").html("<h3 class= 'text-center animated fadeIn'>" +tempF+" degrees farenheit </h3>"); // CHANGE 99 TO VAR FOR TEMP
			$("#weatherIcon").html("<img src='http://openweathermap.org/img/w/"+icon+".png' class= 'center-block animated fadeIn'"+ "</img>")
			$("#descriptor").html("<h3 class= 'text-center animated fadeIn'>" +weatherDescriptor+"</h3>")
			});
  		});
  		}else{
  			alert("Failed to get position!");	
  		}
	$("#farenheit").on("click", function(){
		$(".temperature").empty().append("<h3 class = 'text-center animated fadeIn'>"+tempF+" degrees Farenheit</h3>");
	});
	$("#farenheit").on("tap", function(){
		$(".temperature").empty().append("<h3 class = 'text-center animated fadeIn'>"+tempF+" degrees Farenheit</h3>");
	});
	$("#celsius").on("click", function(){
		$(".temperature").empty().append("<h3 class = 'text-center animated fadeIn'>"+tempC+" degrees Celsius</h3>");
	});
	$("#celsius").on("tap", function(){
		$(".temperature").empty().append("<h3 class = 'text-center animated fadeIn'>"+tempC+" degrees Celsius</h3>");
	});
});
