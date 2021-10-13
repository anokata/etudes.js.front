import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { doX, store } from "./store";
import M from "materialize-css";
import { Button, Card, Row, Col, MediaBox } from "react-materialize";

export interface Props {};
export interface GalleryProps {
  count: number;
};

export type Action = {
  type: string;
  payload: any;
};

export default function Main(props: Props) {
  return (
    <div>
      <Gallery count={5} />
    </div>
  );
}

class Gallery extends React.Component<GalleryProps> {
  constructor(props: GalleryProps) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleClick = ()=> {
    const url = "https://www.artstation.com/api/v2/community/explore/projects/trending.json?page=1&dimension=2d&per_page=30&medium_ids%5B%5D=1";
    fetch(url).then((r) => console.log(r));
  }

  render() {
    const images = Array(this.props.count || 3).fill(null).map((e, i) => 
      <MediaBox
      id="MediaBox_9"
        options={{
          inDuration: 275,
          outDuration: 200,
        }}
        key={i}
        >
        <img src={`https://picsum.photos/800/600?random=${i}`} alt="" width="100" />
      </MediaBox>
    );
    return (
      <div className="gallery">
        {images}
      <Button node="button" style={{ marginRight: "5px" }} waves="light" onClick={this.handleClick}>
        More
      </Button>
      </div>
    );
  }
}

export type AppDispatch = typeof store.dispatch;
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    doX: (data: any) => {
      dispatch(doX(data));
    },
  };
};
// const StGallery = connect(null, mapDispatchToProps)(Gallery);
