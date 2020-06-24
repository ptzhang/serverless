import React, { Component } from 'react';

const HelloComponent = ({message}) => {
  return (
    <h1 onClick={() => { alert(message) }}> hello world </h1>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: ''
    }
  }

  handleChange = (e) => {
    const newName = e.target.value;
    this.setState({
      name: newName
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.name)
  }

  render() {
    return (
      <div className="App">
        <HelloComponent message="herro" />
        Hello {this.state.name}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" value="what's my name?" />
        </form>
      </div>
    );
  }
}

export default App;
