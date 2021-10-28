import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { doX } from "./store";

export default function Main(props) {
  return <div>main</div>;
}



class A extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <input
        label="Todo text"
        onChange={(e) => this.handleChange(e)}
        onKeyDown={(e) => this.handleKeyDown(e)}
      />
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    doX: (data) => {
      dispatch(doX(data));
    },
  };
};
const Ad = connect(null, mapDispatchToProps)(A);
