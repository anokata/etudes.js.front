import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function State1() {
  const [count, setCount] = useState(0);
  console.log(count, typeof(count));
  return (
    <div>
      <p>clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click press this
      </button>
    </div>
  );
}

const root = document.getElementById("hook");
const elem = (<main>hooks <State1 /><hr /> </main>);

if (root) ReactDOM.render(elem, root);

