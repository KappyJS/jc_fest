import React from "react";
import ReactDOM from "react-dom";
import { App } from "./src/App";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./src/store";
import { Provider } from "react-redux";
import "./styles.css";

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
