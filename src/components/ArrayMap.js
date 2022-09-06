import React from 'react'

function ArrayMap() {
    const name = ['Batman', 'Spiderman', 'Superman']
    const nameList = name.map((name, index) => <h2 key={index}> {index} {name}</h2>) 
    // we use index as a key because its have unique value
    return (
        <div>
            {nameList}
        </div>
    )
}

export default ArrayMap
