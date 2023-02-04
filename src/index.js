import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
