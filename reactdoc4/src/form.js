import React from "react";
import ReactDOM from "react-dom";

export class NamingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    let form = (
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            name:
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="send" />
        </form>
    );
    return form;
  }
}

let root = (<main><NamingForm /></main>);

ReactDOM.render(root, document.getElementById("form"));
