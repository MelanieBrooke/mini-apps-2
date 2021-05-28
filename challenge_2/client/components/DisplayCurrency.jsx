import React from 'react';
import FormatCurrency from "./FormatCurrency.jsx";
import Chart from 'chart.js/auto';


const DisplayCurrency = (props) => {
  let dates = [];
  props.currency.map(single => {
    dates.push(single[0])
  });
  let prices = [];
  props.currency.map(single => {
    prices.push(single[1])
  });
  let chartDiv = document.getElementById('bitcoinChart');
  let chart = new Chart(chartDiv, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Closing Price',
        data: prices
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
  // const chartConfig = {
  //   type:'line',
  //   data: {
  //     labels: null,

  //   }
  // }
  return (
    <div>
    </div>
  )
}

export default DisplayCurrency;