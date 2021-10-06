import { createStore } from 'redux';

document.getElementById("state");

function incrementReducer(state = {value: 0}, action) {
  if (action === "inc") return {value:state.value + 1};
  return state;
}

