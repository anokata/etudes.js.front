import React from "react";
import ReactDOM from "react-dom";

export class NamingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: "_",
      age: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.inputRef = React.createRef();
  }

  handleSubmit(e) {
    console.log(`${this.state.name}:${this.state.age}`);
    e.preventDefault();
    const inputNode = this.inputRef.current;
    console.log(inputNode, inputNode.value);
    inputNode.focus();
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    })
  }

  render() {
    let form = (
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            <input type="text" name="uncon" defaultValue="uncontrolled" ref={this.inputRef} />
            <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
          </label>
          <input type="submit" value="send" />
        </form>
    );
    return form;
  }
}

let root = (<main><NamingForm /></main>);

let form = document.getElementById("form");
if (form)
  ReactDOM.render(root, form);
