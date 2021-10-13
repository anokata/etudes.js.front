import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, Provider } from 'react-redux';
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { doX, store } from "./store";
console.log(`hello from TS`);

export interface Props { };

export type Action = {
  type: string;
  payload: any;
}


export default function Main(props: Props) {
  return <div>main</div>;
}

class A extends React.Component {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
    };
  }

  handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <input
        onChange={(e) => this.handleChange(e)}
      />
    );
  }
}

export type AppDispatch = typeof store.dispatch;
const mapDispatchToProps = (dispatch:AppDispatch) => {
  return {
    doX: (data: any) => {
      dispatch(doX(data));
    },
  };
};
const Ad = connect(null, mapDispatchToProps)(A);

