google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date',  'Valve opening', 'Temperature Delta'],
          ['18/03', 65,         26],
          ['19/03',     90,         40],
          ['20/03',        70,         30],
          ['21/03',      73,         31],
          ['22/03',      85,         34],
          ['23/03',      85,         34],
          ['24/03',      64,         26],
          ['25/03',      90,         40],
          ['26/03',      84,         34],
          ['27/03',      65,         26]
        ]);

        var options = {
          title: 'Opening of the valve vs delta of temperature',
          vAxis: {title: 'Percentage of opening / Temperature in °C'},
          isStacked: true
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

        chart.draw(data, options);}