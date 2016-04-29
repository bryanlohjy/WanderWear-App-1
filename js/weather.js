geolocation = navigator.geolocation;
geolocation.getCurrentPosition(currentPosition);


//Reverse Geocoding via OpenCage API: Getting Location Info from current coordinates
function currentPosition(position){
	var lat  = position.coords.latitude;
	var long = position.coords.longitude;

	$('#lat').append(lat);
	$('#long').append(long);

	var open_cage_url = "https://api.opencagedata.com/geocode/v1/json?q="+lat+"+"+long+"&pretty=1&key=3f48944875604c7fb58939745a8b52bd"
	
	//Extracting state / country code info to get info from WUNDERGROUND API
	$.ajax({
		type:'GET',
	    url: open_cage_url,
	    dataType: 'json',
	    success: function(location){
	    	
	    	//Personal note - . for objects, [] for arrays
	    	var state_raw = location.results[0].components.state;
	    	//Replacing White Space with Hypens for Wunderground API
	    	var state= state_raw.replace(/\s+/g, "-");

	    	var country_code = location.results[0].components.country_code;

	    	console.log("State: ",state);
	    	console.log("Country Code: ",country_code);

	    	//Getting weather info from location
	    	var wunderground_url = "http://api.wunderground.com/api/86abf2a752b687fa/hourly/q/"+country_code+"/"+state+".json";

	    	$.ajax({
	    		type:'GET',
			    url: wunderground_url,
			    dataType: 'json',
	    		success: function(weather){
	    			var temperature = weather.hourly_forecast[0].temp.metric;
	    			var dewpoint = weather.hourly_forecast[0].dewpoint.metric;
	    			var humidity = weather.hourly_forecast[0].humidity;
	    			var wind_speed = weather.hourly_forecast[0].wspd.metric;

	    			console.log("Temperature: ",temperature);
	    			console.log("Dewpoint: ",dewpoint);
	    			console.log("Humidity: ",humidity);
	    			console.log("Wind Speed: ",wind_speed);

	    						//Getting CLO value from local JSON File. Based on the works of E.A. McCullough, Ph.D. E.W. Jones, Ph.D. and P.E. J. Huck (http://www.cbe.berkeley.edu/research/other-papers/McCullough%20et%20al%201985%20A%20comprehensive%20data%20base%20for%20estimating%20clothing%20insulation.pdf)
	    						var clothing_url = '/js/clothing.json';

	    				    	$.ajax({
						    		type:'GET',
								    url: clothing_url,
								    dataType: 'json',
						    		success: function(clothing){
						    			console.log(clothing);

	

						    			console.log(my_top);

						    			var top = clothing.top[0].CLO;
						    			var bottom = clothing.bottom[0].CLO;

						    			console.log("Top: ",top);
						    			console.log("Bottom: ",bottom);




						    		}
						    	});
	    		}
	    	});

	    }
	});

}



