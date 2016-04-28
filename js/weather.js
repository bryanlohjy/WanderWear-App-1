geolocation = navigator.geolocation;
geolocation.getCurrentPosition(currentPosition);


//Reverse Geocoding : Getting Location Info from current coordinates
function currentPosition(position){
	var lat  = position.coords.latitude;
	var long = position.coords.longitude;

	$('#lat').append(lat);
	$('#long').append(long);

	var url = "https://api.opencagedata.com/geocode/v1/json?q="+lat+"+"+long+"&pretty=1&key=3f48944875604c7fb58939745a8b52bd"
		
	//Extracting state / country code info to get info from WUNDERGROUND API
	$.ajax({
		type:'GET',
	    url: url,
	    dataType: 'json',
	    success: function(location){
	    	console.log(location);

	    	//Personal note - . for objects, [] for arrays
	    	var state = location.results[0].components.state;
	    	var country_code = location.results[0].components.country_code;
	    	
	    	console.log(state);
	    	console.log(country_code);
	    }
	});

}



