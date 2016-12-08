import Chart from 'chart.min.js';

let todaysDate = new Date();
const months  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

formattedDate = {
  year: todaysDate.getFullYear(),
  month: months[todaysDate.getMonth],
  day: todaysDate.getDate(),
}

function listHours(hour, num) {
  hourList = [];
  for (let i = 0; i < num; i++) {
    let eachHour = hour + i < 11 ? `${hour + i + 1} AM` : `${hour - 11 + i} PM`
    hourList.push(eachHour);
  }
  return hourList;
}

weatherByHour = {
  conditions: ['sunny', 'sunny', 'partial clouds', 'light rain', 'heavy rain' ],
  temperature: [ 72, 70, 68, 66, 64, 62 ],
}
transitData = {
  uberPredict: [13, 16, 15, 12, 22, 17, 18 ],
  taxiPredict: [12, 15, 23, 23, 25, 12, 27 ],
}

var ctx = document.getElementById("transitChart").getContext('2d');
function createChart (ctx, transitData, weatherByHour) {
  let transitChart = new Chart(ctx {
      const times = {
        type: 'bar',
        data: {
            labels: listHours(todaysDate.getHours(), 6);
            datasets: [{
                label: 'predicted demand',
                data: transitData.uberPredict,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
      }
    });
  })
}
