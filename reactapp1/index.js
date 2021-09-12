const log = console.log;
const a = Array.from(new Array(10).keys());
const b = a.join("-");
const divStyle = {
  color: '#abc'
};
let element1 = /*#__PURE__*/React.createElement("b", null, "hi");
log(element1);

class Bitton extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click(e) {
    log("Clicked", this.props.name, e);
  }

  render() {
    return /*#__PURE__*/React.createElement("button", {
      onClick: this.click
    }, "OK ", this.props.name);
  }

}

Bitton.defaultProps = {
  name: "Default"
}; // functional component

function Timer(props) {
  let ms = new Date().getMilliseconds();
  let sec = new Date().getSeconds();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: props.color
    }
  }, sec, ":", ms);
}

function renderTimer() {
  ReactDOM.render( /*#__PURE__*/React.createElement(Timer, {
    color: "#0bd"
  }), document.getElementById("timer"));
}

setInterval(renderTimer, 10);

function tick() {
  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, new Date().toLocaleTimeString(), "."), "ms:", /*#__PURE__*/React.createElement(Timer, null), /*#__PURE__*/React.createElement(Bitton, null), ","), document.getElementById("header"));
}

setInterval(tick, 1000);
ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  className: "dot block-a",
  style: divStyle
}, /*#__PURE__*/React.createElement("h1", null, "Hello React", b, "ms:", /*#__PURE__*/React.createElement(Timer, {
  color: "#ab0"
})), /*#__PURE__*/React.createElement("p", null, a.map(x => String.fromCodePoint(x + 100)))), document.getElementById("app"));
ReactDOM.render( /*#__PURE__*/React.createElement(Bitton, {
  name: "Jonk"
}), document.getElementById("app2"));
