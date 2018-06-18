import React, { Component } from "react";

class MyButton extends Component {
  render() {
    var {children, myColor} = this.props;
    return <button style={{color:myColor}}>{children}</button>;
  }
}
export default MyButton;
