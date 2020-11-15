import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './context/App.jsx';
// import App from './context/counter/App.jsx';
import App from "./portalHoc/App";

ReactDOM.render(
  <>
    <p>react知识点学习</p>
    <App />
  </>,
  document.getElementById("root")
);
