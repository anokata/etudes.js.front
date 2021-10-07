import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function ClickField(props) {
  const [clicker, setClick] = useState({
    clicks: 0,
    incrementBy: 0.1,
  });

  console.log("render cli<C-BS>");
  return (
    <div className="click-field"></div>
  );
}

let root = (<main>
<h1>Idler 02</h1>
  <ClickField />
  </main>);

ReactDOM.render( root, document.getElementById("root"));
