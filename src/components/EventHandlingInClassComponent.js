import React, { Component } from 'react'

class EventHandlingInClassComponent extends Component {
    //Event Handler with Class - Its call event that we declare in class
    // we can call event name as pass in onclick ( without () and with this keyword ) and declare within the class

    clickEvent(){
        console.log('Clicked from Class Component');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickEvent}>Click from Class Component</button>
            </div>
        )
    }
}

export default EventHandlingInClassComponent
