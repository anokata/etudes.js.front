import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

function ClickField(props) {
  const [clicker, setClick] = useState({
    clicks: 0,
    incrementBy: 0.1,
  });

  console.log(`render cli<C-BS> ${clicker.clicks} ${clicker.incrementBy}`);
  useEffect(() => {
    console.log(`effect`);
    console.log("state: ", store.getState());
    console.log("clicks: ", getClicks());
  });
  const dispatch = useDispatch();
  const click = useSelector(selectClicks);

  return (
    <div>
      <div className="click-field" onClick={() => updateClick(setClick, clicker)}>
        Clicks: {clicker.clicks}
      </div>
      <div className="click-field" onClick={() => dispatch(clickAction())}>
        Clicks 2: {getClicks()} {click}
      </div>
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
const selectClicks = (state) => state.clicks; //selector
const getClicks = () => selectClicks(store.getState());
// -----

let root = (
  <main>
    <Provider store={store}>
      <h1>Idler 02</h1>
      <ClickField />
    </Provider>
  </main>
);

ReactDOM.render(root, document.getElementById("root"));
