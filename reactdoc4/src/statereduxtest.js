import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

function incrementReducer(state = {value: 0}, action) {
  if (action.type === "inc") return {value:state.value + 1};
  return state;
}

let store = createStore(incrementReducer);

store.subscribe(() => {console.log(`store: ${store.getState().value}`)});

store.dispatch({type:"inc"});


ReactDOM.render(
  <main>HHH</main>,
  document.getElementById("state")
);
