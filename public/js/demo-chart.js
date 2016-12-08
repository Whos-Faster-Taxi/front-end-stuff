// thank you @potatopeelings for the plugin http://stackoverflow.com/questions/37090625/chartjs-new-lines-n-in-x-axis-labels-or-displaying-more-information-around-ch
Chart.pluginService.register({
    beforeInit: function (chart) {
        var hasWrappedTicks = chart.config.data.labels.some(function (label) {
            return label.indexOf('\n') !== -1;
        });

        if (hasWrappedTicks) {
            // figure out how many lines we need - use fontsize as the height of one line
            var tickFontSize = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].ticks.fontSize, Chart.defaults.global.defaultFontSize);
            var maxLines = chart.config.data.labels.reduce(function (maxLines, label) {
                return Math.max(maxLines, label.split('\n').length);
            }, 0);
            var height = (tickFontSize + 2) * maxLines + (chart.options.scales.xAxes[0].ticks.padding || 0);

            // insert a dummy box at the bottom - to reserve space for the labels
            Chart.layoutService.addBox(chart, {
                draw: Chart.helpers.noop,
                isHorizontal: function () {
                    return true;
                },
                update: function () {
                    return {
                        height: this.height
                    };
                },
                height: height,
                options: {
                    position: 'bottom',
                    fullWidth: 1,
                }
            });

            // turn off x axis ticks since we are managing it ourselves
            chart.options = Chart.helpers.configMerge(chart.options, {
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false,
                            // set the fontSize to 0 so that extra labels are not forced on the right side
                            fontSize: 0
                        }
                    }]
                }
            });

            chart.hasWrappedTicks = {
                tickFontSize: tickFontSize
            };
        }
    },
    afterDraw: function (chart) {
        if (chart.hasWrappedTicks) {
            // draw the labels and we are done!
            chart.chart.ctx.save();
            var tickFontSize = chart.hasWrappedTicks.tickFontSize;
            var tickFontStyle = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].ticks.fontStyle, Chart.defaults.global.defaultFontStyle);
            var tickFontFamily = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].ticks.fontFamily, Chart.defaults.global.defaultFontFamily);
            var tickLabelFont = Chart.helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);
            chart.chart.ctx.font = tickLabelFont;
            chart.chart.ctx.textAlign = 'center';
            var tickFontColor = Chart.helpers.getValueOrDefault(chart.options.scales.xAxes[0].fontColor, Chart.defaults.global.defaultFontColor);
            chart.chart.ctx.fillStyle = tickFontColor;

            var meta = chart.getDatasetMeta(0);
            var xScale = chart.scales[meta.xAxisID];
            var yScale = chart.scales[meta.yAxisID];

            chart.config.data.labels.forEach(function (label, i) {
                label.split('\n').forEach(function (line, j) {
                    chart.chart.ctx.fillText(line, xScale.getPixelForTick(i + 0.5), (chart.options.scales.xAxes[0].ticks.padding || 0) + yScale.getPixelForValue(yScale.min) +
                        // move j lines down
                        j * (chart.hasWrappedTicks.tickFontSize + 2));
                });
            });

            chart.chart.ctx.restore();
        }
    }
});


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
   labels.push(`${hours[i]}\n${temp[i]} deg\n${cond[i]}`)
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
              label: 'Uber demand',
              data: transitData.uberPredict,
              backgroundColor: barColors,
              borderColor: barColors,
              borderWidth: 1
              },
              {
              label: 'Taxi demand',
              data: transitData.taxiPredict,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1,
              }
            ]
        },
        options: {
          labelString: 'testing 123',
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
