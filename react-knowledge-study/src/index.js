import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './context/App.jsx';
// import App from './context/counter/App.jsx';
// import App from "./portalHoc/App";
// import App from "./hooks/UseState";
// import App from "./hooks/UseEffect";
// import App from "./hooks/UseContext";
// import App from "./hooks/UseReducer";
import App from "./baseTest/index";

ReactDOM.render(
  <>
    <p>react知识点学习</p>
    <App />
  </>,
  document.getElementById("root")
);

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
// }, 10000);
