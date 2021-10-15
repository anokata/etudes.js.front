import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";

function State1() {
  const [count, setCount] = useState(0);
  console.log(count, typeof count);
  const a = useMyHook("hi");

  return (
    <div>
      <p>clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click press this</button>
      <button onClick={() => action(count)}>{a}</button>
    </div>
  );
}

let action = () => {};

function useMyHook(str) {
  const [s, setS] = useState(`[${str}]`);
  function changeS(x) {
    setS(`{${x}}${s}`);
  }
  action = changeS;
  return s;
}

// useContext
let obj = {
  val: 1,
  set: function() {this.val += 10},
};
const Context = React.createContext(); // create Context obj with value {..} // props: Provider,  Consumer
console.log("Context: ", Context);
Context.displayName = 'CONTEXT!!';

function TryContext() {
  const context = useContext(Context); // get current context value
  // const {val, set} = useContext(Context); // get current context value
  const [v, setV] = useState(obj);

  return (<div>
      <hr />
      context: {context.val}
      state: {v.val}
      <button onClick={() => {
        // context.val++;
        context.set();
        setV({val: v.val + 3}); // ???
        // console.log(context, Context);
      }}>do</button>
      <hr />
    </div>
  );
}

const root = document.getElementById("hook");
const elem = (
  <main>
    hooks <State1 />
    <hr />{" "}
    <Context.Provider value={obj}>
    <TryContext />
      </Context.Provider>
  </main>
);

if (root) ReactDOM.render(elem, root);
