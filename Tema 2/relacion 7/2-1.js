var platform = new H.service.Platform({
  'apikey': 'jQFROesm6AyfuUHN5GTu4HCwRXYpdceQfqtSvdFjQQg'
});

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function success(pos) {
    const crd = pos.coords;

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
        zoom: 10,
        center: { lat: crd.latitude, lng: crd.longitude }
        });
}

navigator.geolocation.getCurrentPosition(success, error);