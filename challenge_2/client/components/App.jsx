import React from 'react';
import axios from 'axios';
import DisplayCurrency from './DisplayCurrency.jsx';
import styles from '../styles.modules.css';
import Chart from 'chart.js/auto';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      byDate: []
    };
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(data => {
      this.setState({
        byDate:Object.entries(data.data.bpi)
      });
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return(
      <div id="main">
        <h1 className={styles.heading}>Cryptocurrency Charting Tool<br></br></h1>
        <div>
          <canvas id="bitcoinChart"></canvas>
        </div>
          <DisplayCurrency currency={this.state.byDate} />
        <br></br>
        <div id="credit">Powered by <a href="https://www.coindesk.com/price/bitcoin">Coindesk</a></div>
      </div>
    )
  }
}

export default App;