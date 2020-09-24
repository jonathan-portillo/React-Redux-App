import React, { useEffect } from "react";
import "./App.css";
import { fetchData } from "./actions/actionsRM";
import { connect } from "react-redux";

function App(props) {
  console.log("App: Props :", props);
  useEffect(() => {
    props.fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Rick and Morty Character Randomizer!!</h1>
      <div>
        <h2>Character: {props.rm_data.name}</h2>
        <img src={props.rm_data.img} />
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
