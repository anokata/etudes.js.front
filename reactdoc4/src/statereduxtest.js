import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux"; // hooks for redux
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// ------------------------------------------

function incrementReducer(state = { value: 0 }, action) {
  if (action.type === "inc") return { value: state.value + 1 };
  return state;
}

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
let log = console.log;
log(counterSlice);
log(counterSlice.reducer);
log(counterSlice.actions);
log(counterSlice.actions.increment);

const store0 = configureStore({ reducer: {
  counter: counterReducer,
} }); //toolkit style

let store = createStore(incrementReducer); // basic style

store.subscribe(() => {
  console.log(`store: ${store.getState().value}`);
});
store.dispatch({ type: "inc" });

// ------------------------------------------
const root = document.getElementById("state");
const elem = (
  <Provider store={store}>
    <main>HHH</main>
  </Provider>
);
if (root) ReactDOM.render(elem, root);
