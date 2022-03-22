google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Jours', 'Ouverture de la valve' ],
          ['21/03',          100                    ],
          ['20/03',      85                    ],
          ['19/03',      80                     ],
          ['18/03',      90                    ]       
        ]);

        var options = {
          title: 'Valve regulation',
          hAxis: {title: 'Periode',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Percentage', minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }