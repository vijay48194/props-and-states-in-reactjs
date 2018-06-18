import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyButton from "./MyButton";
import Counter from "./Counter";
import Switch from "./Switch";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Coding</h1>
        <Switch />
        <Counter />
        <MyButton myColor="red">Click 1</MyButton>
        <MyButton myColor="blue">Click 2</MyButton>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);