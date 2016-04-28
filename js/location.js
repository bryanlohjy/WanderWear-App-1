L.mapbox.accessToken = 'pk.eyJ1IjoiYnJ5YW5sb2hqeSIsImEiOiJjaW12Nnd2M3QwMm1pdXBra2hmeWQ2OWI3In0.M3vzM36scSxM3aTimLK56Q';

// Define a map and a marker
var map;
var marker;

// Setup the geolocation and watch the user's position
geolocation = navigator.geolocation;
geolocation.watchPosition(updateLocation, showBadStatus);

// When we get the new location back
function updateLocation(position) {
  // Get the updated coords
  var mylat  = position.coords.latitude;
  var mylong = position.coords.longitude;

  $('.status').html("");

  if (map === undefined) {
    // Make the map and marker if they aren't defined, and add the marker to the map
    map = L.mapbox.map('map', 'mapbox.streets').setView([mylat, mylong], 20);
    marker = L.marker([mylat, mylong], {
      icon: L.mapbox.marker.icon({
      'marker-color': '#f86767'
      })
    });

    marker.addTo(map);
  } else {
    // Update the marker with the new coords
    marker.setLatLng(L.latLng(mylat, mylong));
  }
}

function showBadStatus() {
  $('.status').html("Couldn't fetch your location.");
}
