import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducerRM } from "./reducers/reducerRM";
import "./index.css";
import thunk from "redux-thunk";
import App from "./App";
import Character from "./components/character";

const store = createStore(reducerRM, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
