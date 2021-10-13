import React from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
type State = {
  a: any,
};
// export type State = ReturnType<typeof store.getState>;
const initialState:State = {
  a: 0,
};
const selectA = (state:State) => state.a;

const ASlice = createSlice({
  name: "a",
  initialState: initialState,
  reducers: {
    doX: (state, action) => {
    },
  }
});

export const store = configureStore({ reducer: ASlice.reducer });
export const { doX } = ASlice.actions;

export type AppDispatch = typeof store.dispatch;
