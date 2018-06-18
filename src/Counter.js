import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <p>{this.state.count}</p>
        <button onClick={()=>{
          var old = this.state.count;
          this.setState({count:old-1})
        }}>-</button>
        <button onClick={()=>{
          var old = this.state.count;
          this.setState({count: old+1})
        }}>+</button>
      </div>
    );
  }
}
export default Counter;

