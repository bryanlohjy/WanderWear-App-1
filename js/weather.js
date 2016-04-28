geolocation = navigator.geolocation;
geolocation.getCurrentPosition(currentPosition);


 
function currentPosition(position){
	var lat  = position.coords.latitude;
	var long = position.coords.longitude;

	$('#lat').append(lat);
	$('#long').append(long);

	var url = "https://api.opencagedata.com/geocode/v1/json?q="+lat+"+"+long+"&pretty=1&key=3f48944875604c7fb58939745a8b52bd"
	

	$.ajax({
		type:'GET',
	    url: url,
	    dataType: 'json',
	    success: function(location){
	    	console.log(location);

	    	var state = location["results"];
	    	console.log(state);



	    	// $.each(location,function(i,location){
	     //    	$('#location').append("Location:" + lat);


	     //    });


	    }
	});

}



