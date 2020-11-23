import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushis: [],
    moreSushiIndex: 4
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis}))
    .catch(err => console.log(err))
  }

  handleMoreSushi = () => {
    this.setState(prevState => {
      return {moreSushiIndex: prevState.moreSushiIndex+4}
    })
  }

  renderSushis() {
    return this.state.sushis.map(sushi => <Sushi wallet={this.props.wallet} sushisEaten={this.props.sushisEaten} key={sushi.id} sushi={sushi}/>).slice(this.state.moreSushiIndex-4,this.state.moreSushiIndex)
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton handleMoreSushi={this.handleMoreSushi} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer