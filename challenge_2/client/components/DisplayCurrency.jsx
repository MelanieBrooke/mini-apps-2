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
        label: 'Bitcoin Closing Price in USD',
        data: prices,
        backgroundColor: 'rbg(235, 52, 98)',
        pointBackgroundColor: 'rbg(235, 52, 98)',
        pointBorderColor: 'rbg(235, 52, 98)'
        // tension: 0.1
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