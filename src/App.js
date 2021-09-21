import React, { Component } from "react";
//import "./style.css";

class App extends Component {
  state = {
    cart: ["Corn", "Potato"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  // addNewItem = () => {
  //   let { cart, input } = this.state;
  //   cart.push(input);
  //   // this.state.cart.push(this.state.input); // same as above, though bad practice 
  // };
  addNewItem = () => {
    this.setState((prevState, props) => ({
      cart: [...prevState.cart, prevState.input],
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>
      </div>
    );
  }
}

export default App