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
        Clks: {clicker.clicks}
      </div>
    </div>
  );
}

function updateClick(setClick, clicker) {
  let newValue = Math.round(100 * ( clicker.clicks + clicker.incrementBy ))/100; 
  console.log(newValue);
  setClick({ ...clicker, clicks: newValue});
}


// redux store
function ClickFieldR(props) {
  const dispatch = useDispatch();
  const click = useSelector(selectClicks);
  const inc = useSelector(selectInc);
  console.log(`clicks: ${click}  inc: ${inc}`);
  const clicks = getClicks();

  return (
    <div className="field-left">
      <div className="click-field" onClick={() => dispatch(clickAction())} onDoubleClick={(e)=>e.preventDefault()}>
        Clicks: {click}<br />
        <span className="small-text">incrementing: {inc}</span>
      </div>
    </div>
  );
}


// redux
const initialState = {
  clicks: 0,
  clickInc: 0.05,
};
const store = configureStore({ reducer: rootReducer });

function rootReducer(state = initialState, action) {
  if (action.type === CLICK_ACTION) {
    let newState = {...state};
    newState.clicks += state.clickInc;
    return newState;
  }
  if (action.type === UPGRADE_ACTION) {
    let newState = {...state};
    newState.clickInc += action.payload;
    return newState;
  }
  return state;
}
const CLICK_ACTION = "click/clicked";
const UPGRADE_ACTION = "click/upgrade";
// make an action
function clickAction() {
  return { 
    type: CLICK_ACTION, 
    payload: 0,
  };
}
function upgradeAction() {
  return { 
    type: UPGRADE_ACTION, 
    payload: 0.1,
  };
}
// store.dispatch(clickAction());
const selectClicks = (state) => Math.round(state.clicks*100)/100; //selector
const selectInc = (state) => Math.round(state.clickInc*100)/100;
const getClicks = () => selectClicks(store.getState());
// -----

function BuyUpdateButton(props) {
  const dispatch = useDispatch();
  const upgrade = () => {
    dispatch(upgradeAction());
  }
  return (
    <button onClick={upgrade}>Upgrade {props.for}</button>
  );
}

// ----------------------------------------
let root = (
  <main>
    <Provider store={store}>
      <h1>Idler 02</h1>
      <ClickField />
      <hr />
      <ClickFieldR />
      <BuyUpdateButton for="clicker"/>
    </Provider>
  </main>
);

ReactDOM.render(root, document.getElementById("root"));
