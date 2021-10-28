import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import BankNotePack from "./banknote"

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
};

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
    banknoteInfo: (state) => {},
  },
});

export const store = configureStore({ reducer: ASlice.reducer });
export const { deposite, take } = ASlice.actions;

export const mapDispatchToProps = (dispatch) => {
  return {
    deposite: (data) => {
      dispatch(deposite(data));
    },
    take: (amount) => {
      dispatch(take(amount));
    },
  };
};

export const mapStateToProps = state => ({
    selectBanknotes: state.banknotes
});
