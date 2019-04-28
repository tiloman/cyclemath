var myChart = document.getElementById('myChart').getContext('2d');



var massPopChart = new Chart(myChart, {
  type: 'line',
  data: {
    datasets: [{
        label: 'Normal',
        backgroundColor: 'rgba(4, 137, 177,0.2)',
        borderColor: '#0489B1',
        borderWidth: 3,
        pointRadius: 0,
        data: [{
            x: 150,
            y: 0.432728
        }, {
            x: 200,
            y: 0.478
        }]
    },
    {
        label: 'Sitzriese',
        backgroundColor: 'rgba(4, 137, 177,0.2)',
        borderColor: '#088A4B',
        borderWidth: 3,
        pointRadius: 0,
        borderDash: [5, 5],
        data: [{
            x: 150,
            y: 0.402728
        }, {
            x: 200,
            y: 0.448
        }]
    }, {
        label: 'Langbeiner',
        backgroundColor: 'rgba(4, 137, 177,0.2)',
        borderColor: 'red',
        borderWidth: 3,
        pointRadius: 0,
        borderDash: [5, 5],
        data: [{
            x: 150,
            y: 0.462728
        }, {
            x: 200,
            y: 0.508
        }]
    },
    {
      label: 'Eingabe',
      type: 'bubble',
      backgroundColor: '#0489B1',
      data: [{
        x: 170,
        y: 0.5,
        r: 0,
      }]

    }]
},
options: {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    position: 'bottom',
  },
    scales: {
        xAxes: [{
            type: 'linear',
            position: 'bottom'
        }]

    }
}
});

function updateChart() {
var beinlaenge = document.getElementById('in_beinlaenge').value;
var groesse = document.getElementById('in_groesse').value;
var koerpertyp = beinlaenge / groesse;


massPopChart.data.datasets[3].data[0] = {x: groesse, y: koerpertyp, r:10};
massPopChart.update();
}
