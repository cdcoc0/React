import React from "react";

class App extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   console.log("constructor");
  // };
  
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    this.setState(current =>({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState({count: this.state.count - 1});
  };

  componentDidMount() {
    console.log("component rendered");
  };

  componentDidUpdate() {
    console.log("updated");
  };

  componentWillUnmount() {
    console.log("component die");
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>class component executed {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;