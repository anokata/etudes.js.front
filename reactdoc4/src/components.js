import React from "react";
import ReactDOM from "react-dom";

console.log("hi components");

export function ButtonHu(props) {
  return <button className="hu">{props.text}</button>;
}

export class ButtonCu extends React.Component {
  render() {
    return <button className="cu">{this.props.value}</button>;
  }
}

export function ListElem(props) {
  return <li>{props.text}</li>;
}

export function UnsortedList(props) {
  console.log(props.children);
  const elems = Array(props.length | 1).fill(null).map((e, i) => {
    return <ListElem key={i} text={`Elem#${i + 1}`} />;
  });
  return <ul>{elems}</ul>;
}

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      secs: 0,
      wrongSecs: 0,
    }
    console.log("[Clock constructor]");
  }

  render() {
    console.log("[Clock render]");
    return (<div>
      <span>Time is:{this.state.date.toLocaleTimeString()} [{this.state.secs}]({this.state.wrongSecs})</span>
          </div>);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    this.setState({
      wrongSecs: this.state.wrongSecs + 1,
    });
    this.setState((prevState) => ({
        secs: prevState.secs + 1,
    }));
  }

  componentDidMount() {
    console.log("[Clock mount]");
    this.timerID = setInterval(()=>this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("[Clock unmount]");
    clearInterval(this.timerID);
  }
}

const root = (
  <main>
    c<ButtonHu text="hu" />
    <ButtonCu value="CU" />
    <div><UnsortedList length="3" >text<span>in</span> </UnsortedList></div>
    <Clock />
  </main>
);

ReactDOM.render(root, document.getElementById("component"));

export let Components = root;
