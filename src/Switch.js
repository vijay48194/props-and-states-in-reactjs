import React, { Component } from "react";

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "OFF"
    } 
  }
  render() {
    return (
      <button onClick={()=>{
        var old = this.state.label;
        if (old === "OFF") {
          this.setState({label: "ON"})
        } else {
          this.setState({label: "OFF"})
        }
      }}>{this.state.label}</button>
    );
  }
}
export default Switch;
