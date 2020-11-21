import React, { Component } from 'react';

class Child extends Component{

    componentWillUnmount(){
        alert("Child component is going to remove from the dom");
    }

    render(){
        return (
            <h3>Hello Child</h3>
        )
    }
}

export default Child