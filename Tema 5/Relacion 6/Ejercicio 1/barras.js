google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
          ['PSOE', 243, 'red'],
          ['PP', 155, 'blue'],
          ['Podemos', 77, 'purple'],
          ['VOX', 76, 'green'],
          ['Ciudadanos', 67, 'orange'],
          ['CUP', 28, 'yellow'],
          ['Junts', 15, 'black'],
          ['PNV', 12, 'grey'],
          ['Bildu', 9, 'brown'],
          ['Mas País', 3, 'pink'],
          ['CC', 2, 'lightblue'],
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
      chart.draw(view, options);
  }