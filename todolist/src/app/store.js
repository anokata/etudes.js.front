import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const genID = genIDfunc();
const mockData = [
  makeTodoRec("Undone", "do todo list"),
  makeTodoRec("Undone", "do somthing else..."),
  makeTodoRec("Undone", "do somthing else..."),
  makeTodoRec("Undone", "do somthing else..."),
  makeTodoRec("Done", "do somthing else..."),
];
const initialState = {
  list: mockData,
  filter: "all",
};

const todoSlice = createSlice({
  name: "todolist",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { id, type, text } = action.payload;
      state.list.unshift(makeTodoRec(type, text));
    },
    delTodo: (state, action) => {
      const delIndex = getTodoElemByIdAction(state, action);
      state.list.splice(delIndex, 1);
    },
    toggleDoneStatus: (state, action) => {
      const index = getTodoElemByIdAction(state, action);
      state.list[index].type = oppositeType(state.list[index].type);
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

function oppositeType(type) {
  if (type === "Undone") return "Done";
  if (type === "Done") return "Undone";
}

function getTodoElemByIdAction(state, action) {
  const id = action.payload;
  return state.list.findIndex((e) => e.id === id);
}

export const store = configureStore({ reducer: todoSlice.reducer });
export const { addTodo, delTodo, toggleDoneStatus, changeFilter } =
  todoSlice.actions;
export const selectList = (state) => state.list;
export const selectFilter = (state) => state.filter;

function genIDfunc() {
  let id = Math.round(Math.random() * 11231231);
  return () => id++;
}

export function makeTodoRec(type, text) {
  return { id: genID(), type, text };
}
