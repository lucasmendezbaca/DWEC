google.charts.load('current', {
    'packages': ['geochart'],
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['País', 'Número de visitantes'],
        ['España', 31180802],
        ['Francia', 117000000],
        ['Italia', 64512919],
        ['Alemania', 39563217],
        ['Reino Unido', 36316000],
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

