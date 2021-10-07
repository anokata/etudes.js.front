import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function ClickField(props) {
  const [clicker, setClick] = useState({
    clicks: 0,
    incrementBy: 0.1,
  });

  console.log(`render cli<C-BS> ${clicker.clicks} ${clicker.incrementBy}`);
  return (
    <div className="click-field" onClick={() => setClick({...clicker, clicks: clicker.clicks + clicker.incrementBy})}>Clicks: {clicker.clicks}</div>
  );
}

let root = (<main>
<h1>Idler 02</h1>
  <ClickField />
  </main>);

ReactDOM.render( root, document.getElementById("root"));
