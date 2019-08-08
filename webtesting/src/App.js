import React from 'react';
import './App.css';
import Dashboard  from './components/Dashboard'
import Display from './components/Dashboard'

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  render () {
    return (
      <div className="App">
        <h1>BASEBALL SCORECARD</h1>
        <Display numBalls={this.numBalls} numStrikes={this.numStrikes}/>
        <Dashboard callBall={this.callBall} callStrike={this.callStrike} callFoul={this.callFoul} callHit={this.callHit}/>
      </div>
    )
  }

  numBalls = () => {
    return this.state.balls;
  }

  numStrikes = () => {
    return this.state.strikes;
  }

  callBall = () => {
    if (this.state.balls === 3)
    this.setState({...this.state, balls: this.state.balls + 1})
    else 
    this.setState({...this.state, balls: this.state.balls + 1})
  }

  callStrike = () => {
    if (this.state.strikes === 2)
    this.setState({...this.state, strikes: 0})
    else 
    this.setState({...this.state, strikes: this.state.strikes + 1})
  }

  callFoul = () => {
    if (this.state.strikes < 2)
    this.setState({...this.state, strikes: this.state.strikes + 1})
  }
}


export default App;
