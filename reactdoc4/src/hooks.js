import React, { useState, useEffect, useContext, useReducer } from "react";
import ReactDOM from "react-dom";

function State1() {
  const [count, setCount] = useState(0);
  console.log(count, typeof count);
  const a = useMyHook("hi");

  return (
    <div>
      <p>clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click press this</button>
      <button onClick={() => action(count)}>{a}</button>
    </div>
  );
}

let action = () => {};

function useMyHook(str) {
  const [s, setS] = useState(`[${str}]`);
  function changeS(x) {
    setS(`{${x}}${s}`);
  }
  action = changeS;
  return s;
}

// useContext
let obj = {
  val: 1,
  set: function() {this.val += 10},
};
// context that give a state 
const Context = React.createContext(); // create Context obj with value {..} // props: Provider,  Consumer
console.log("Context: ", Context);
Context.displayName = 'tryCONTEXT!';

function useTryContext() {
  const context = React.useContext(Context)
  if (!context) {
    throw new Error(`useTryContext must be used within a Provider`)
  }
  return context
}

function TryContext() {
  const context = useTryContext(); // get current context value
  // const {val, set} = useContext(Context); // get current context value
  const [v, setV] = useState(obj);

  return (<div>
      <hr />
      context: {context.val}
      state: {v.val}
      <button onClick={() => {
        // context.val++;
        context.set();
        setV({val: v.val + 3}); // ???
        // console.log(context, Context);
      }}>do</button>
      <hr />
    </div>
  );
}

// try useReducer
function reducer(state, action) {
  console.log(action)
  switch (action) {
    case "inc":
      return {...state, val: state.val + 10}
  }
  return state
}

function TryReducer() {
  const [state, dispatch] = useReducer(reducer, {val: 8})
  return (
    <div>
      <hr />
      Reducer: {state.val}
      <button onClick={()=>dispatch("inc")}>inc</button>
    </div>
  );
}

// Context again, give state
const StateContext = React.createContext()

// our hook to get state context
function useStateContext() {
  const context = React.useContext(StateContext)
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider")
  }
  return context
}

function StateProvider(props) {
  // make state that will be given in context
  const [value, setValue] = useState(1)
  // give state in value of context provider
  return <StateContext.Provider value={{value, setValue}} {...props} />
}

// use
function StateContextUsingButton() {
  // get state value thru context
  const {value, setValue} = useStateContext()
  return <button onClick={()=> setValue(value*5)}>state from context: {value}</button>
}

const root = document.getElementById("hook");
const elem = (
  <main>
    hooks <State1 />
    <hr />{" "}
    <Context.Provider value={obj}>
    <TryContext />
      </Context.Provider>

    <TryReducer/>

    <StateProvider >
      <StateContextUsingButton />
    </StateProvider>
  </main>
);



if (root) ReactDOM.render(elem, root);
