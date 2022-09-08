import React from 'react';

//Functional syntax
// function FunctionComponent() {
//     return <h1>Hello Everyone, This is functional component example..</h1>
// }

//arrow syntax as ES6 coding standard
const FunctionComponent = (props) => {
    return (
        <div>
            <h1>Hello {props.heroName} a.k.a {props.name}, This is Functional component example with props and children..</h1>
            { props.children }
        </div>
    )
}

export default FunctionComponent;