import React from 'react';
// import './App.css';


const Dashboard = props => {
    return (
        <div className="dashboard-container">
            <button onClick={props.callBall}>BALL</button>
            <button onClick={props.callStrike}>STRIKE</button>
            <button onClick={props.callFoul}>FOUL BALL</button>
            <button onClick={props.callHit}>HIT</button>
        </div>
    );
};

export default Dashboard;