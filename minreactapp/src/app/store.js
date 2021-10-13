import React from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {};
const selectA = (state) => state.a;

const ASlice = createSlice({
  name: "a",
  initialState: initialState,
  reducers: {
    doX: (state) => {
    },
  }
});

export const store = configureStore({ reducer: ASlice.reducer });
export const { doX } = ASlice.actions;
