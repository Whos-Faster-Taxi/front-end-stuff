console.log('chart data loaded');


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
    let eachHour = hour + i < 12 ? `${hour + i + 1} AM` : `${hour - 11 + i} PM`
    hourList.push(eachHour);
  }
  return hourList;
}

const weatherByHour = {
  conditions: ['sunny', 'sunny', 'partial clouds', 'light rain', 'heavy rain', 'thunderstorms' ],
  temperature: [ 72, 70, 68, 66, 64, 62 ],
}
const transitData = {
  uberPredict: [13, 16, 15, 12, 22, 17, 18 ],
  taxiPredict: [12, 15, 23, 23, 25, 12, 27 ],
}

function setBarColors(arr) {
  return arr.map((val) => {
    color = parseInt(val)
    return `rgba(${color}, ${color}, ${color}, .8)`
  });
}

function createLabels(val, temp, cond) {
  const hours = listHours(todaysDate.getHours(), val.length)
  labels = [];
  for (let i = 0; i < val.length - 1; i++) {
   labels.push(`${hours[i]}, ${temp[i]} deg, ${cond[i]}`)
   }
   return labels
}


let barLabels = createLabels(transitData.uberPredict, weatherByHour.temperature, weatherByHour.conditions)

console.log(barLabels)
const barColors = setBarColors(weatherByHour.temperature);

console.log(barColors)

var ctx = document.getElementById("transitChart").getContext('2d');
  let transitChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: barLabels,
            datasets: [{
                label: 'predicted demand',
                data: transitData.uberPredict,
                backgroundColor: barColors,
                borderColor: barColors,
                borderWidth: 1
            }]
        },
        options: {
          legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
