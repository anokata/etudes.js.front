import React from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
const mockData = [
  makeTodoRec("-", "do todo list"),
  makeTodoRec("A", "do somthing else..."),
];
const initialState = {
  list: mockData,
};

const todoSlice = createSlice({
  name: "todolist",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const {type, text} = action.payload;
      console.log(type, text, ' add');
      state.list.push(makeTodoRec(type, text));
    },
  }
});

export const store = configureStore({ reducer: todoSlice.reducer });
export const {addTodo} = todoSlice.actions;
export const selectList = (state) => state.list;
// const dispatch = useDispatch();
// const click = useSelector(selectA);
// dispatch(Slice.actions.do({});

function makeTodoRec(type, text) {
  return {type, text, };
}
