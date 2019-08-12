import React from "react";
import ReactDOM from "react-dom";

//Store component
import Store from "./login/store";
import { Provider } from "react-redux";

import Index from "./login";

import "./styles.css";

console.log(Store.getState());

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
