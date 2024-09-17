import React from 'react';
import './App.css';

const Display = props => {
    return (
        <div className="display-container">
            <h3>Number of Balls for this At Bat</h3>
            <p>
                {props.numBalls()}
            </p>
            <h3>Number of Strikes for this At Bat</h3>
            <p>
                {props.numStrikes()}
            </p>
        </div>
    )
}

export default Display;