import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./actions/actionsRM";
import { connect } from "react-redux";
import Character from "./components/character";

function App(props) {
  console.log("App: Props :", props);
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className="App">
      <Character />
      {/* <h1>Rick Information Card</h1>
      <div>
        <h2>{props.rm_data.name}</h2>
        <img src={props.rm_data.img} /> */}

      <div>
        {/* {props.rm_data.map((state) => {
            <h1>Name: {state.rm_data.name}</h1>;
          })} */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rm_data: state.rm_data,
    is_loading_data: state.is_loading_data,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
