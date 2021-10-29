import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import BankNotePack from "./banknote"
import { takeAmount, fromVariant } from "./banknote"

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

// dignity
const initialState = {
  banknotes: [
    new BankNotePack(100, 5000),
    new BankNotePack(100, 2000),
    new BankNotePack(100, 1000),
    new BankNotePack(100, 500),
    new BankNotePack(100, 200),
    new BankNotePack(100, 100),
    new BankNotePack(100, 50),
  ],
  reminder: 0,
  givePack: [],
};

const ASlice = createSlice({
  name: "a",
  initialState: initialState,
  reducers: {
    take: (state, action) => {
      const amount = action.payload;
      const result = takeAmount(state.banknotes, amount)
      state.banknotes = result.banknotes;
      state.reminder = result.reminder;
      state.givePack = result.givePack;
    },
    banknoteInfo: (state) => {},
    restore: (state, action) => {
      state.banknotes = fromVariant(action.payload);
    }
  },
});

export const store = configureStore({ 
  reducer: ASlice.reducer,
  middleware: customizedMiddleware,
});
export const { take, restore } = ASlice.actions;

export const mapDispatchToProps = (dispatch) => {
  return {
    take: (amount) => {
      dispatch(take(amount));
    },
    restore: (variant) => {
      dispatch(restore(variant));
    },
  };
};

export const mapStateToProps = state => ({
    selectBanknotes: state.banknotes,
    selectReminder: state.reminder,
    selectGivePack: state.givePack,
});
