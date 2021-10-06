import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { useSelector, useDispatch } from 'react-redux'; // hooks for redux
import { configureStore } from '@reduxjs/toolkit'
export default configureStore({  reducer: {},})


function incrementReducer(state = {value: 0}, action) {
  if (action.type === "inc") return {value:state.value + 1};
  return state;
}

let store = createStore(incrementReducer);

store.subscribe(() => {console.log(`store: ${store.getState().value}`)});

store.dispatch({type:"inc"});

const root = document.getElementById("state");
const elem = <Provider store={store}><main>HHH</main></Provider>

if (root) ReactDOM.render(elem, root);
