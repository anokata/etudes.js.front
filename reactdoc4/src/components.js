import React from 'react';
import ReactDOM from 'react-dom';

console.log("hi components");

export function ButtonHu(props) {
  return <button className="hu">{props.text}</button>;
}

export class ButtonCu extends React.Component {
  render() {
    return <button className="cu">{this.props.value}</button>;
  }
}

const root = <main>c<ButtonHu text="hu"/><ButtonCu value="CU"/></main>;

ReactDOM.render(root, document.getElementById("component"));

export let Components = root;
