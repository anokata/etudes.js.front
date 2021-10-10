import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
// kilo mega clicks
// dblclickers, autoclk
// each 10 25 50... increase more
// increasing func
let x:string = "a";
console.log(`hello from TS: ${x}`);
// redux store component
export interface Props { };
export interface BuyProps { for: string };

function ClickFieldR(props:Props) {
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

export type Action = {
  type: string;
  payload: any;
}

export interface ClickFieldProps {
  selectClicks: (state: State) => number;
  selectInc: (state: State) => number;
  click: () => Action;
}

function ClickField(props:ClickFieldProps) {
  const dispatch = useDispatch();
  const click = useSelector(props.selectClicks);
  const inc = useSelector(props.selectInc);
  const clickAction = props.click;
  console.log(`kilo: clicks: ${click}  inc: ${inc}`);

  return (
    <div className="field-left">
      <div className="click-field" onClick={() => dispatch(clickAction())} onDoubleClick={(e)=>e.preventDefault()}>
        KiloClicks: {click}<br />
        <span className="small-text">incrementing: {inc}</span>
      </div>
    </div>
  );
}

// TODO
export interface ClickerType {
  baseProgression: number[];
  kiloClicks: number,
  kiloClicksInc: number,
}
let Clicker  = {
  baseProgression: [1, 2, 5, 10, 25, 50, 75, 100, 150, 200],
  kiloClicks: 0,
  kiloClicksInc: 0.1,
}


// redux init
export interface State {
  clicks: number,
  clickInc: number,
  incUpgrade: number,
  clicker: ClickerType,
};
const initialState: State = {
  clicks: 0,
  clickInc: 0.5,
  incUpgrade: 0.2,
  clicker: Clicker,
};

const selectClicks = (state: State) => Math.round(state.clicks*100)/100; //selector
const selectInc = (state: State) => Math.round(state.clickInc*100)/100;
const selectKiloClicks = (state: State) => Math.round(state.clicker.kiloClicks*100)/100; //selector
const selectKiloInc = (state: State) => Math.round(state.clicker.kiloClicksInc*100)/100;
// slice way to do - reducers per action with immer
const clickerSlice = createSlice({
  name: "clicker",
  initialState: initialState,
  reducers: {
    click: (state) => {
      state.clicks += state.clickInc;
    },
    upgradeClick: (state, action: Action) => {
      const {inc, cost} = action.payload;
      if (state.clicks < cost) return;
      state.clickInc += inc;
      state.clicks -= cost;
    },
    kiloClick: (state) => {
      state.clicker.kiloClicks += state.clicker.kiloClicksInc;
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

function BuyUpdateButton(props: BuyProps) {
  const dispatch = useDispatch();
  const upgrade = () => {
    dispatch(clickerSlice.actions.upgradeClick(makeUpgrade()));
  }
  return (
    <button onClick={upgrade}>Upgrade {props.for} for 1 click</button>
  );
}

// ----------------------------------------
let root = (
  <main>
    <Provider store={store}>
      <h1>Idler 02</h1>
      <hr />
      <ClickFieldR />
      <BuyUpdateButton for="clicker"/>
      <hr />
      <ClickField selectClicks={selectKiloClicks} selectInc={selectKiloInc} click={clickerSlice.actions.kiloClick}/>
    </Provider>
  </main>
);

ReactDOM.render(root, document.getElementById("root"));
