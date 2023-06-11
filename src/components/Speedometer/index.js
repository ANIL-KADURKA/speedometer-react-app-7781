// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerated = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({
        count: prevState.count + 10,
      }))
    }
  }

  onBraked = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state

    console.log(count)
    return (
      <div className="container">
        <h1 className="head">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="icon"
          alt="Speedometer"
        />
        <h1 className="head">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button btn1"
            onClick={this.Accelerated}
            type="button"
          >
            Accelerate
          </button>
          <button className="button btn2" onClick={this.onBraked} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
