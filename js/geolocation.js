/*function obtenerLocalizacion() {
	if(navigator.geolocation) {
		document.getElementById("nivelSoporte").innerHTML ="La Geo-Localizacion HTML5 está soportada en este navegador.";
			navigator.geolocation.getCurrentPosition(updateLocation);
		}}

function updateLocation(position) {
	console.log('position:',position);
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var pre = position.coords.accuracy;
}*/

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);