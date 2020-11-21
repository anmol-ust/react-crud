import React, { Component } from 'react';
import Child from './Child';

class FavColor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favColor: "red",
            isChild: true
        }
    }

    // static getDerivedStateFromProps(props,state){
    //     return {favColor:props.favColor}
    // }

    shouldComponentUpdate() {
        return true
    }

    delChild = () => {
        this.setState({ isChild: false })
    }

    render() {
        let child;
        if(this.state.isChild){
            child = <Child />
        }

        return (
            <div>
                {child}
                <h1>My favorite color is {this.state.favColor}</h1>
                <button onClick={this.delChild}>Delete Child Dom</button>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favColor: "blue" })
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = "Before the update, favorite color was " + prevProps.favColor;
        return null
    }

    componentDidUpdate() {
        document.getElementById('div2').innerHTML = "Updated favorite color is " + this.state.favColor;
    }
}

export default FavColor;