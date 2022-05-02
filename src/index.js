import React from "react";
import ReactDOM from "react-dom";
import "./new.css";
import Appn from "./Appn";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Appn />
  </BrowserRouter>,
  document.getElementById("root")
);
