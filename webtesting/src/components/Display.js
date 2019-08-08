import React from 'react';
import './App.css';

class Display extends React.Component {
    render() {
    return (
        <div className="display-container">
            <h3>Number of Balls for this At Bat</h3>
            <p>
                {this.props.numBalls()}
            </p>
            <h3>Number of Strikes for this At Bat</h3>
            <p>
                {this.props.numStrikes()}
            </p>
        </div>
    )
}}
