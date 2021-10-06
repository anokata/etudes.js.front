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
const decrement = counterSlice.actions.decrement;
const increment = counterSlice.actions.increment;
const counterReducer = counterSlice.reducer;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
}); //toolkit style

let store0 = createStore(incrementReducer); // basic style

store.subscribe(() => {
  console.log(`store: ${store.getState().counter.value}`);
});
store.dispatch({ type: "inc" });

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------
const root = document.getElementById("state");
const elem = (
  <Provider store={store}>
    <main>HHH</main>
    <Counter />
  </Provider>
);
if (root) ReactDOM.render(elem, root);
