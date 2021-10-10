import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
// kilo mega clicks
// dblclickers

// redux store component
function ClickFieldR(props) {
  const dispatch = useDispatch();
  const click = useSelector(selectClicks);
  const inc = useSelector(selectInc);
  console.log(`clicks: ${click}  inc: ${inc}`);

  return (
    <div className="field-left">
      <div className="click-field" onClick={() => dispatch(clickerSlice.actions.click())} onDoubleClick={(e)=>e.preventDefault()}>
        Clicks: {click}<br />
        <span className="small-text">incrementing: {inc}</span>
      </div>
    </div>
  );
}

// redux init
const initialState = {
  clicks: 0,
  clickInc: 0.5,
  incUpgrade: 0.2,
};

const selectClicks = (state) => Math.round(state.clicks*100)/100; //selector
const selectInc = (state) => Math.round(state.clickInc*100)/100;
// slice way to do - reducers per action with immer
const clickerSlice = createSlice({
  name: "clicker",
  initialState: initialState,
  reducers: {
    click: (state) => {
      state.clicks += state.clickInc;
    },
    upgradeClick: (state, action) => {
      const {inc, cost} = action.payload;
      if (state.clicks < cost) return;
      state.clickInc += inc;
      state.clicks -= cost;
    },
  }
});

//use clickerSlice.reducer:
const store = configureStore({ reducer: clickerSlice.reducer });
//use clickerSlice.actions
function makeUpgrade() {
  return {
    inc: 0.2,
    cost: 1,
  }
}
// -----

function BuyUpdateButton(props) {
  const dispatch = useDispatch();
  const upgrade = () => {
    dispatch(clickerSlice.actions.upgradeClick(makeUpgrade()));
  }
  return (
    <button onClick={upgrade}>Upgrade {props.for} for 1 click</button>
  );
}

class Clicker {
}

// ----------------------------------------
let root = (
  <main>
    <Provider store={store}>
      <h1>Idler 02</h1>
      <hr />
      <ClickFieldR />
      <BuyUpdateButton for="clicker"/>
    </Provider>
  </main>
);

ReactDOM.render(root, document.getElementById("root"));
