import React from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";

const genID = genIDfunc();
const mockData = [
  makeTodoRec("-", "do todo list"),
  makeTodoRec("A", "do somthing else..."),
  makeTodoRec("b", "do somthing else..."),
  makeTodoRec("C", "do somthing else..."),
  makeTodoRec("d", "do somthing else..."),
];
const initialState = {
  list: mockData,
};

const todoSlice = createSlice({
  name: "todolist",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const {id, type, text} = action.payload;
      state.list.push(makeTodoRec(type, text));
    },
    delTodo: (state, action) => {
      const id = action.payload;
      const delIndex = state.list.findIndex((e) => e.id === id);
      console.log(`del ${id} #${delIndex}`);
      state.list.splice(delIndex, 1);
    }
  }
});

export const store = configureStore({ reducer: todoSlice.reducer });
export const {addTodo, delTodo} = todoSlice.actions;
export const selectList = (state) => state.list;
// const dispatch = useDispatch();
// const click = useSelector(selectA);
// dispatch(Slice.actions.do({});

function genIDfunc() {
  let id = Math.round(Math.random() * 11231231);
  return () => id++;
}


export function makeTodoRec(type, text) {
  return {id: genID(), type, text, };
}
