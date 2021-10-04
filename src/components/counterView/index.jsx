import React, { Component } from 'react'

class CounterView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h1>{this.props.counterNumber}</h1>
         );
    }
}
 
export default CounterView;