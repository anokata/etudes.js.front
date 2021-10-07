import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function ClickField(props) {
  const [clicker, setClick] = useState({
    clicks: 0,
    incrementBy: 0.1,
  });

  console.log(`render cli<C-BS> ${clicker.clicks} ${clicker.incrementBy}`);
  useEffect(() => {
    console.log(`effect`);
  });
  return (
    <div className="click-field" onClick={() => updateClick(setClick, clicker)}>Clicks: {clicker.clicks}</div>
  );
}

function updateClick(setClick, clicker) {
  setClick({...clicker, clicks: clicker.clicks + clicker.incrementBy});
}

let root = (<main>
<h1>Idler 02</h1>
  <ClickField />
  </main>);

ReactDOM.render( root, document.getElementById("root"));
