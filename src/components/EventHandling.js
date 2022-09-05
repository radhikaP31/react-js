import React from 'react'

function EventHandling() {

    // Event handling without the class name
    // we directly class event name line onClick ( without () )
    function clickHandler() {
        console.log('clicked');
    }
    return (
        <div>
            <h1>Event Handling Example</h1>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default EventHandling
