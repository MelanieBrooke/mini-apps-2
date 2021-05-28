import React from 'react';
import axios from 'axios';
import DisplayCurrency from './DisplayCurrency.jsx';
// import ReactDOM from 'react-dom';

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
    // axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(data => {
      // var byDate = Object.entries(data.data.bpi);
      this.setState({
        byDate:Object.entries(data.data.bpi)
      });
      // console.log(this.state);
    })
    .catch(err => {
      console.error(err);
    })
  }

  render() {
    return(
      <div id="main">
        <DisplayCurrency currency={this.state.byDate} />
        <div id="credit">Powered by <a href="https://www.coindesk.com/price/bitcoin">Coindesk</a></div>
      </div>
    )
  }
}

export default App;