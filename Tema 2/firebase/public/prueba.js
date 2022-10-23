var platform = new H.service.Platform({
  'apikey': 'jQFROesm6AyfuUHN5GTu4HCwRXYpdceQfqtSvdFjQQg'
});

// 2.1

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// function success(pos) {
//     const crd = pos.coords;

//     let latitud = crd.latitude;
//     let longitud = crd.longitude;

//     // Obtain the default map types from the platform object:
//     var defaultLayers = platform.createDefaultLayers();

//     // Instantiate (and display) a map object:
//     var map = new H.Map(
//         document.getElementById('mapContainer'),
//         defaultLayers.vector.normal.map,
//         {
//         zoom: 10,
//         center: { lat: latitud, lng: longitud }
//         });
// }


// 2.2
// Define a variable holding SVG mark-up that defines an icon image:
// var svgMarkup = '<svg width="24" height="24" ' +
//     'xmlns="http://www.w3.org/2000/svg">' +
//     '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//     'height="22" /><text x="12" y="18" font-size="12pt" ' +
//     'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//     'fill="white">H</text></svg>';



// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// function success(pos) {
//     const crd = pos.coords;

//     let latitud = crd.latitude;
//     let longitud = crd.longitude;

//     // Obtain the default map types from the platform object:
//     var defaultLayers = platform.createDefaultLayers();

//     // Instantiate (and display) a map object:
//     var map = new H.Map(
//         document.getElementById('mapContainer'),
//         defaultLayers.vector.normal.map,
//         {
//         zoom: 10,
//         center: { lat: latitud, lng: longitud }
//         });

//     let coordenadas = {lat: latitud, lng:longitud};
//     // Create an icon, an object holding the latitude and longitude, and a marker:
//     var icon = new H.map.Icon(svgMarkup),
//         coords = coordenadas,
//         marker = new H.map.Marker(coords, {icon: icon});

//     // Add the marker to the map and center the map at the location of the marker:
//     map.addObject(marker);
//     map.setCenter(coordenadas);
// }


//2.3
// var svgMarkup = '<svg width="24" height="24" ' +
//     'xmlns="http://www.w3.org/2000/svg">' +
//     '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//     'height="22" /><text x="12" y="18" font-size="12pt" ' +
//     'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//     'fill="white">H</text></svg>';

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// function success(pos) {
//     const crd = pos.coords;

//     let latitud = crd.latitude;
//     let longitud = crd.longitude;

//     // Obtain the default map types from the platform object:
//     var defaultLayers = platform.createDefaultLayers();

//     // Instantiate (and display) a map object:
//     var map = new H.Map(
//         document.getElementById('mapContainer'),
//         defaultLayers.vector.normal.map,
//         {
//         zoom: 10,
//         center: { lat: latitud, lng: longitud }
//         });

//     let coordenadas = {lat: latitud, lng:longitud};

//     // Create the parameters for the routing request:
//     var routingParameters = {
//     'routingMode': 'fast',
//     'transportMode': 'car',
//     // The start point of the route:
//     'origin': `${latitud},${longitud}`,
//     // The end point of the route:
//     'destination': '52.5309916298853,13.3846220493377',
//     // Include the route shape in the response
//     'return': 'polyline'
//     };

//     // Define a callback function to process the routing response:
//     var onResult = function(result) {
//     // ensure that at least one route was found
//     if (result.routes.length) {
//         result.routes[0].sections.forEach((section) => {
//             // Create a linestring to use as a point source for the route line
//             let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

//             // Create a polyline to display the route:
//             let routeLine = new H.map.Polyline(linestring, {
//             style: { strokeColor: 'blue', lineWidth: 3 }
//             });

//             // Create a marker for the start point:
//             let startMarker = new H.map.Marker(section.departure.place.location);

//             // Create a marker for the end point:
//             let endMarker = new H.map.Marker(section.arrival.place.location);

//             // Add the route polyline and the two markers to the map:
//             map.addObjects([routeLine, startMarker, endMarker]);

//             // Set the map's viewport to make the whole route visible:
//             map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
//         });
//     }
//     };

//     // Get an instance of the routing service version 8:
//     var router = platform.getRoutingService(null, 8);

//     // Call calculateRoute() with the routing parameters,
//     // the callback and an error callback function (called if a
//     // communication error occurs):
//     router.calculateRoute(routingParameters, onResult,
//     function(error) {
//         alert(error.message);
//     });
// }

//#######################
//2.4
// var svgMarkup = '<svg width="24" height="24" ' +
//     'xmlns="http://www.w3.org/2000/svg">' +
//     '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//     'height="22" /><text x="12" y="18" font-size="12pt" ' +
//     'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//     'fill="white">H</text></svg>';

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// function success(pos) {
//     const crd = pos.coords;

//     let latitud = crd.latitude;
//     let longitud = crd.longitude;

//     // Obtain the default map types from the platform object:
//     var defaultLayers = platform.createDefaultLayers();

//     // Instantiate (and display) a map object:
//     var map = new H.Map(
//         document.getElementById('mapContainer'),
//         defaultLayers.vector.normal.map,
//         {
//         zoom: 10,
//         center: { lat: latitud, lng: longitud }
//         });
    
//     // //Create the default UI:
//     // var ui = H.ui.UI.createDefault(map, defaultLayers);

//     let coordenadas = {lat: latitud, lng:longitud};

//     // Create the parameters for the routing request:
//     var routingParameters = {
//     'routingMode': 'fast',
//     'transportMode': 'car',
//     // The start point of the route:
//     'origin': `${latitud},${longitud}`,
//     // The end point of the route:
//     'destination': '37.2652105,-2.9416126',
//     // Include the route shape in the response
//     'return': 'polyline'
//     };

//     // Define a callback function to process the routing response:
//     var onResult = function(result) {
//     // ensure that at least one route was found
//     if (result.routes.length) {
//         result.routes[0].sections.forEach((section) => {
//             // Create a linestring to use as a point source for the route line
//             let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

//             // Create a polyline to display the route:
//             let routeLine = new H.map.Polyline(linestring, {
//             style: { strokeColor: 'blue', lineWidth: 3 }
//             });

//             // Create a marker for the start point:
//             let startMarker = new H.map.Marker(section.departure.place.location);

//             // Create a marker for the end point:
//             let endMarker = new H.map.Marker(section.arrival.place.location);

//             // Add the route polyline and the two markers to the map:
//             map.addObjects([routeLine, startMarker, endMarker]);

//             // Set the map's viewport to make the whole route visible:
//             map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
//         });
//     }
//     };

//     // Get an instance of the routing service version 8:
//     var router = platform.getRoutingService(null, 8);

//     // Call calculateRoute() with the routing parameters,
//     // the callback and an error callback function (called if a
//     // communication error occurs):
//     router.calculateRoute(routingParameters, onResult,
//     function(error) {
//         alert(error.message);
//     });

//     document.getElementById("otro").innerHTML = "<h1>La distancia recorrida es: </h1>";
//     document.getElementById("otro").innerHTML += getKilometros(latitud, longitud, 37.2652105,-2.9416126);
// }

// function getKilometros (lat1, lon1, lat2, lon2) {
//     rad = function (x) { return x * Math.PI / 180; }
//     var R = 6378.137; //Radio de la tierra en km
//     var dLat = rad(lat2 - lat1);
//     var dLong = rad(lon2 - lon1);
//     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c;
//     return d.toFixed(3); //Retorna tres decimales
// }



//###################################
//2.5
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function success(pos) {
    const crd = pos.coords;

    let latitud = crd.latitude;
    let longitud = crd.longitude;

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
        zoom: 10,
        center: { lat: latitud, lng: longitud }
        });
    
    // //Create the default UI:
    // var ui = H.ui.UI.createDefault(map, defaultLayers);

    let coordenadas = {lat: latitud, lng:longitud};

    // Create the parameters for the routing request:
    var routingParameters = {
    'routingMode': 'fast',
    'transportMode': 'car',
    // The start point of the route:
    'origin': `${latitud},${longitud}`,
    // The end point of the route:
    'destination': '37.2652105,-2.9416126',
    // Include the route shape in the response
    'return': 'polyline'
    };

    // Define a callback function to process the routing response:
    var onResult = function(result) {
    // ensure that at least one route was found
    if (result.routes.length) {
        result.routes[0].sections.forEach((section) => {
            // Create a linestring to use as a point source for the route line
            let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

            // Create a polyline to display the route:
            let routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'blue', lineWidth: 3 }
            });

            // Create a marker for the start point:
            let startMarker = new H.map.Marker(section.departure.place.location);

            // Create a marker for the end point:
            let endMarker = new H.map.Marker(section.arrival.place.location);

            // Add the route polyline and the two markers to the map:
            map.addObjects([routeLine, startMarker, endMarker]);

            // Set the map's viewport to make the whole route visible:
            map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
        });
    }
    };

    // Get an instance of the routing service version 8:
    var router = platform.getRoutingService(null, 8);

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    router.calculateRoute(routingParameters, onResult,
    function(error) {
        alert(error.message);
    });

    document.getElementById("otro").innerHTML = "<h1>La distancia recorrida es: </h1>";
    document.getElementById("otro").innerHTML += getKilometros(latitud, longitud, 37.2652105,-2.9416126);
}

//Bloque del programa principal
navigator.geolocation.getCurrentPosition(success, error);