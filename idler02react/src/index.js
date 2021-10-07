import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";

function ClickField(props) {
  const [clicker, setClick] = useState({
    clicks: 0,
    incrementBy: 0.1,
  });

  console.log(`render cli<C-BS> ${clicker.clicks} ${clicker.incrementBy}`);
  useEffect(() => {
    console.log(`effect`);
    console.log("state: ", store.getState());
  });
  return (
    <div className="click-field" onClick={() => updateClick(setClick, clicker)}>
      Clicks: {clicker.clicks}
    </div>
  );
}

function updateClick(setClick, clicker) {
  setClick({ ...clicker, clicks: clicker.clicks + clicker.incrementBy });
  store.dispatch(clickAction());
}

// redux
const initialState = {
  clicks: 0,
};
const store = configureStore({ reducer: rootReducer });

function rootReducer(state = initialState, action) {
  if (action.type === CLICK_ACTION) {
    let newState = {...state};
    newState.clicks += 1;
    return newState;
  }
  return state;
}
const CLICK_ACTION = "click/clicked";
// make an action
function clickAction() {
  return { 
    type: CLICK_ACTION, 
    payload: 0 
  };
}
// store.dispatch(clickAction());
// -----

let root = (
  <main>
    <h1>Idler 02</h1>
    <ClickField />
  </main>
);

ReactDOM.render(root, document.getElementById("root"));
