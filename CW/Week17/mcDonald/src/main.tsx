import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

import {Provider} from "react-redux";
import store from "./Component";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);