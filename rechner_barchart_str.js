//zweiter chart_container

var bar_chart_str = document.getElementById('bar_chart_str').getContext('2d');



var barChartStr = new Chart(bar_chart_str, {
  type: 'horizontalBar',
  data: {
    datasets: [{
      label: 'Eingabe',
      backgroundColor: '#0489B1',
      data: [{x: 0}]
    }]
},
options: {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
        xAxes: [{
            ticks: {
                max: 0.5,
                min: -0.5,
                stepSize: 0.1,
                beginAtZero: false,

            }
        }]
    }

}
});


function updateChart_2() {
var beinlaenge = document.getElementById('in_beinlaenge').value;
var p_stack = beinlaenge * 0.69;
var p_str = p_stack / 403; //Bike_reach muss noch ausgelesen werden
var p_str_gerundet = Math.round(p_str*1000)/1000;

console.log(p_str_gerundet*10);
barChartStr.data.datasets[0].data[0] = {x: p_str_gerundet*10 - 1.45};
barChartStr.update();
}
