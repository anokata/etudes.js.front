const a = Array.from(new Array(10).keys());
const b = a.join("-");
const divStyle = {
  color: '#abc'
};

class Bitton extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("button", null, "OK");
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  className: "dot block-a",
  style: divStyle
}, /*#__PURE__*/React.createElement("h1", null, "Hello React", b), /*#__PURE__*/React.createElement("p", null, a.map(x => String.fromCodePoint(x + 100)))), document.getElementById("app"));
ReactDOM.render( /*#__PURE__*/React.createElement(Bitton, null), document.getElementById("app2"));
