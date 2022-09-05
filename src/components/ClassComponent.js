import React, { Component } from 'react';

class ClassComponent extends Component{
    render() {
        return <h1>Hello {this.props.heroName } a.k.a { this.props.name }, This is Class component example with props..</h1>
    }
}

export default ClassComponent;