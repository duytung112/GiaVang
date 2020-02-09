// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", " 4", " 5", " 6", " 7", " 8", " 9", " 10", " 11", " 12", " 13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
    datasets: [{
      label: "Mua vào",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [44.0, 44.0, 44.0,44.0,44.0,44.0,44.0,44.0,43.55,43.06,43.33,43.33,43.33,42.7,42.95,43.15,43.1,43.27,43.35,43.45,43.7,43.45,43.45,43.45,43.45,43.45,43.45,43.45,43.45,43.45,43.45,44.2],
      spanGaps: true,},{
      label: "Bán ra",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "red",
      borderColor: "red",
      pointRadius: 5,
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "red",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [44.2,44.2,44.2,44.2,44.2,44.2,44.2,44.6,43.75,43.26,43.5,43.5,43.5,42.9,43.15,43.35,43.3,43.42,43.55,43.65,43.9,43.65,43.85,43.85,43.85,43.85,43.85,43.85,43.85,44.5,44.5]
      }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 42,
          max: 46,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
