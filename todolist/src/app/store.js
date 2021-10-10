import React from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {};
const selectA = (state) => state.a;

const ASlice = createSlice({
  name: "a",
  initialState: initialState,
  reducers: {
    do: (state) => {
    },
  }
});

const store = configureStore({ reducer: ASlice.reducer });
// const dispatch = useDispatch();
// const click = useSelector(selectA);
// dispatch(Slice.actions.do({});

// <Provider store={store}>
