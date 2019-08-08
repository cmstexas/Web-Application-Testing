import React from 'react';
// import './App.css';


class Dashboard extends React.Component {
    render() {
    return (
        <div className="dashboard-container">
            <button onClick={this.props.callBall}>BALL</button>
            <button onClick={this.props.callStrike}>STRIKE</button>
            <button onClick={this.props.callFoul}>FOUL BALL</button>
            <button onClick={this.props.callHit}>HIT</button>
        </div>
    )
};
}

export default Dashboard;