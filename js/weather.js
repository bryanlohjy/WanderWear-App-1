geolocation = navigator.geolocation;
geolocation.getCurrentPosition(currentPosition);


 
function currentPosition(position){
	var lat  = position.coords.latitude;
	var long = position.coords.longitude;

	$('#lat').html("Latitude: " + lat);
	$('#long').html("Longitude: " + long);

	var url = "https://api.opencagedata.com/geocode/v1/json?q="+lat+"+"+long+"&pretty=1&key=3f48944875604c7fb58939745a8b52bd"

	console.log('lat',lat);
	console.log('long',long);
	console.log('url',url);

	$.ajax({
		type:'GET',
	    url: url,
	    dataType: 'json',
	    success: function(results){
	        console.log(results);

	    }
	});

}



