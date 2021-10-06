import React from 'react';
import ReactDOM from 'react-dom';
import Components from './components';
import './form';
import './statereduxtest';
import './hooks';

const headerH2 = <h2>Consectetur esse eveniet?</h2>;
const user1 = {
  name: "admin", role: "anon",
};
const par = <p>user:{user1.name}</p>;
const textForHeader = "Elit nisi quia fugit.";
const parText = <div>see: {par}<hr/></div>;

function isUpperCase(s) {
  return s.toUpperCase() === s;
}

function formatHeader(text) {
  if (isUpperCase(text[0])) return <h2>{text}</h2>;
  else return <h3 tabIndex="0" className={user1.role}>{text}</h3>;
}

let inTextV = "_S_";
let inText = (<span>{inTextV}</span>);
function inChange(e) {
  console.log(e, this);
  inTextV = e.target.value;
  document.querySelector("input").value=e.target.value;
  main();
}
const input = <input value="{console.log('attaked?')}" type="text" onChange={inChange} />;

let mainElement = 
  <main>
    <div>
      <h1>Good day! (webpack+react by babel)!</h1>
      {headerH2}
      <p>{textForHeader}</p>
      {parText}
      {formatHeader("abc")}
      {formatHeader("Abc")}
      {input}
      {inText}
    </div>
  </main>;

function main() {
  let root = document.getElementById("root");
  if (!root) return;
  ReactDOM.render(
    mainElement,
    document.getElementById("root")
  );
}
main();
