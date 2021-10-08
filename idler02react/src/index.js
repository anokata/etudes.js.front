import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

// state hook
function ClickField(props) {
  const [clicker, setClick] = useState({
    clicks: 0,
    incrementBy: 0.1,
  });

  console.log(`render cli<C-BS> ${clicker.clicks} ${clicker.incrementBy}`);
  useEffect(() => {
    console.log("clicks: ", clicker.clicks);
  });

  return (
    <div>
      <div className="click-field" onClick={() => updateClick(setClick, clicker)}>
        Clicks: {clicker.clicks}
      </div>
    </div>
  );
}

// redux store
function ClickFieldR(props) {
  useEffect(() => {
    console.log("rclicks: ", getClicks());
  });
  const dispatch = useDispatch();
  const click = useSelector(selectClicks);
  console.log("rclicks: ", click);

  return (
    <div>
      <div className="click-field" onClick={() => dispatch(clickAction())} onDoubleClick={(e)=>e.preventDefault()}>
        Clicks 2: {getClicks()} {click}
      </div>
    </div>
  );
}


function updateClick(setClick, clicker) {
  let newValue = Math.round(100 * ( clicker.clicks + clicker.incrementBy ))/100; 
  console.log(newValue);
  setClick({ ...clicker, clicks: newValue});
}

// redux
const initialState = {
  clicks: 0,
};
const store = configureStore({ reducer: rootReducer });

function rootReducer(state = initialState, action) {
  if (action.type === CLICK_ACTION) {
    let newState = {...state};
    newState.clicks += 0.1;
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
const selectClicks = (state) => Math.round(state.clicks*100)/100; //selector
const getClicks = () => selectClicks(store.getState());
// -----

let root = (
  <main>
    <Provider store={store}>
      <h1>Idler 02</h1>
      <ClickField />
      <ClickFieldR />
    </Provider>
  </main>
);

ReactDOM.render(root, document.getElementById("root"));
