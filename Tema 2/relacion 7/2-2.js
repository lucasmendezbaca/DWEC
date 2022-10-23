var platform = new H.service.Platform({
  'apikey': 'jQFROesm6AyfuUHN5GTu4HCwRXYpdceQfqtSvdFjQQg'
});

// Define a variable holding SVG mark-up that defines an icon image:
var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function success(pos) {
    const crd = pos.coords;

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    let coordenadas = {lat: crd.latitude, lng: crd.longitude};
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
        zoom: 10,
        center: coordenadas
        });

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
        coords = coordenadas,
        marker = new H.map.Marker(coords, {icon: icon});

    // Add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
    map.setCenter(coordenadas);
}

navigator.geolocation.getCurrentPosition(success, error);