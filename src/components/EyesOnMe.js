import React, { Component } from "react";

export default class EyesOnMe extends Component {

    eyesOn = () => {
        console.log("Good!")
    }

    eyesOff = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <div>
                <button
                onFocus={this.eyesOn}
                onBlur={this.eyesOff}>
                </button>
            </div>
        )
    }
}
