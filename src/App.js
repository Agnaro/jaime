import React, { Component } from 'react';
import StockPrice from './components/StockPrice';
import Jaime from './components/Jaime';
import Loss from './components/Loss';
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
      stockPrice: 1,
      jaimeAmt: 10,
      jaimePrice: 7.65
  }

  componentDidMount() {
    axios.get('https://api.iextrading.com/1.0/stock/f/price').then(res => this.setState({ stockPrice: res.data }));
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td>
              <StockPrice price={this.state.stockPrice}  />
            </td>
            <td>
              <Jaime price={this.state.jaimePrice} amt={this.state.jaimeAmt} />
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <Loss currentPrice={this.state.stockPrice} soldPrice={this.state.jaimePrice} soldAmt={this.state.jaimeAmt} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
