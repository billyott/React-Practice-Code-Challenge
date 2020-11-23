import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushisEaten: [],
    wallet: 100
  }

  sushisEaten = (sushi) => {
    this.setState(prevState => {
      return {
        sushisEaten: [...prevState.sushisEaten, sushi],
        wallet: prevState.wallet-sushi.price
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushisEaten={this.sushisEaten} wallet={this.state.wallet} />
        <Table wallet={this.state.wallet} sushisEaten={this.state.sushisEaten}/>
      </div>
    );
  }
}

export default App;