import React, { Component } from 'react'

class SetState extends Component {

    constructor() {
        super()

        this.state = {
            count: 0,
        }
    }

    increment() {
        // this.setState(
        //     {
        //         count: this.state.count + 1,
        //     }, 
        //     () => { 
        //         console.log('Callback value- ', this.state.count) 
        //     }
        // )
        this.setState(prevCount => ({
            count: prevCount.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <h1> **Example of setState() with increment counter**</h1>
                <div>
                    Count: {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default SetState
