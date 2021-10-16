import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

// 01. Create global context
const Context = React.createContext()
// 02. Make hook to get context
const useStore = () => {
    const context = React.useContext(Context)
    return context
}

const createStore = (reducer, initialState) => {
  let currentState = initialState
  let listeners = []

  const getState = () => currentState
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = listener => listeners.push(listener)
  return { getState, dispatch, subscribe }
}

const useSelector = selector => {
  // 03. Use our hook to get context
  const ctx = useStore()
  if (!ctx) {
    return 0
  }
  return selector(ctx.store.getState()) 
}
const useDispatch = () => {
  // 03. Use our hook to get context
  const ctx = useStore()
  if (!ctx) {
    return () => {}
  }
  return ctx.store.dispatch
}

const Provider = ({ store, context, children }) => {
  // 04. (!) Create state from store value
  const [state, setValue] = useState(store.getState())
  // 05. (!) Subscribe for update state of store to it value
  store.subscribe(()=> setValue(store.getState()))
  return <Context.Provider value={{store}}>{children}</Context.Provider>
}

// actions
const UPDATE_COUNTER = 'UPDATE_COUNTER'
const CHANGE_STEP_SIZE = 'CHANGE_STEP_SIZE'
// action creators
const updateCounter = value => ({
  type: UPDATE_COUNTER,
  payload: value,
})
const changeStepSize = value => ({
  type: CHANGE_STEP_SIZE,
  payload: value,
})

// reducers
const defaultState = {
  counter: 1,
  stepSize: 1,
}

const reducer = (state = defaultState, action) => {
  console.log(state)
  switch(action.type) {
    case UPDATE_COUNTER:
      // 06. Fix increment by step and create and return new state obj
      return {...state, counter: state.counter + action.payload * state.stepSize}
    case CHANGE_STEP_SIZE:
      return {...state, stepSize: action.payload}
    default:
      return state
  }
}

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(updateCounter(-1))}>-</button>
      <span> {counter} </span>
      <button onClick={() => dispatch(updateCounter(1))}>+</button>
    </div>
  )
}

const Step = () => {
  const stepSize = useSelector(state => state.stepSize, (current, prev) => current === prev)
  const dispatch = useDispatch()

  return (
    <div>
      <div>Текущая величина шага: {stepSize}</div>
      <input type="range" min="1" max="5" value={stepSize}
        onChange={({ target }) => dispatch(changeStepSize(target.value))}
      />
    </div>
  )
}

ReactDOM.render(
  <Provider store={createStore(reducer, defaultState)} >
      <Step />
      <Counter />
  </Provider>,
  document.getElementById('slomux')
)

