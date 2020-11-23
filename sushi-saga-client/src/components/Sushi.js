import React, { Fragment } from 'react'

class Sushi extends React.Component {

  state = {
    sushiClicked: false
  }

  handleSushiClick = () => {
    if (this.props.wallet-this.props.sushi.price <= 0) {
      console.log("nah, too broke, mate")
    } else {
      if (!this.state.sushiClicked) {this.props.sushisEaten(this.props.sushi)}
      this.setState(prevState => {
        return {sushiClicked: true}
      })
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleSushiClick}>
          { 
            this.state.sushiClicked ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi