import React from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";

// dignity
const initialState = {
  note5000: 0,
  note2000: 0,
  note1000: 0,
  note500: 0,
  note200: 0,
  note100: 0,
  note50: 0,
};
const selectA = (state) => state.a;

class BankNotePack {
  contructor(count, dignity) {
    this.count = count;
    this.dignity = dignity;
  }
}

const ASlice = createSlice({
  name: "a",
  initialState: initialState,
  reducers: {
    deposite: (state, action) => {
      const set = action.payload;
      console.log("deposite", set);
    },
    take: (state, action) => {
      const amount = action.payload;
      console.log("take", amount);
    },
    banknoteInfo: (state) => {
    },
  }
});

export const store = configureStore({ reducer: ASlice.reducer });
export const { deposite, take } = ASlice.actions;
