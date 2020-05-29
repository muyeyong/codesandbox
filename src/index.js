import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import store from "./CartStore";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={new store()}>
    <App />
  </Provider>,
  rootElement
);
