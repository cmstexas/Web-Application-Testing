import React from 'react';
import './App.css';
import Dashboard  from './components/Dashboard'
import Display from './components/Dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0,
  };
}

ballChange = event => {
  this.setState(prevState => {
    return {
      balls: prevState.balls + 1, 
    }
  })
};

strikeChange = event => {
  this.setState(prevState => {
    return {
      strikes: prevState.strikes + 1, 
    }
  })
};

getHit = event => {
  this.setState({
    balls: 0, 
    strikes: 0,
  })
};

componentDidUpdate = (prevProps, prevState) => {
  if ((this.state.balls > 3) || (this.state.strikes > 2)) {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  }
}


  render () {
    return (
      <div className="App">
        <h1>BASEBALL SCORECARD</h1>
        <Display numBalls={this.state.numBalls} numStrikes={this.state.numStrikes}/>
        <Dashboard callBall={this.ballChange} callStrike={this.strikeChange} callFoul={this.ballChange} callHit={this.getHit}/>
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
