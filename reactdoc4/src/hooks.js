import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function State1() {
  const [count, setCount] = useState(0);
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

