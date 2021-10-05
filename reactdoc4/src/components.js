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

const root = (
  <main>
    c<ButtonHu text="hu" />
    <ButtonCu value="CU" />
    <div><UnsortedList length="3" >text<span>in</span> </UnsortedList></div>
  </main>
);

ReactDOM.render(root, document.getElementById("component"));

export let Components = root;
