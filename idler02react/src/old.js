import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';

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


  const clicks = getClicks();
const getClicks = () => selectClicks(store.getState());


const store = configureStore({ reducer: rootReducer });

function rootReducer(state = initialState, action) {
  if (action.type === CLICK_ACTION) {
    let newState = {...state};
    newState.clicks += state.clickInc;
    return newState;
  }
  if (action.type === UPGRADE_ACTION) {
    // TODO extract click upd ... logic in model clicker
    if (state.clicks < action.cost) return state;
    let newState = {...state};
    newState.clickInc += action.payload;
    newState.clicks -= action.cost;
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
    cost: 1,
  };
}
// store.dispatch(clickAction());
