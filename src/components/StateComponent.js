import React, { Component } from 'react';

class StateComponent extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome to the application.',
        }
    }

    subscribe(){
        this.setState({
            message: 'Thank you for subscribing!!'
        })
    }

    render() {
        // change the button text on click of button with state management
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={ () => this.subscribe() }>Click here to subscribe</button>
            </div>
        )
    }
}

export default StateComponent;