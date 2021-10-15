import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function State1() {
  const [count, setCount] = useState(0);
  console.log(count, typeof(count));
  const a = useMyHook("hi");

  return (
    <div>
      <p>clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click press this 
      </button>
      <button onClick={() => action(count)}>
        {a}
      </button>
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
  return s
}
// again

const root = document.getElementById("hook");
const elem = (<main>hooks <State1 /><hr /> </main>);

if (root) ReactDOM.render(elem, root);

