import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './context/App.jsx';
// import App from './context/counter/App.jsx';
// import App from "./portalHoc/App";
// import App from "./hooks/UseState";
// import App from "./hooks/UseEffect";
// import App from "./hooks/UseContext";
// import App from "./hooks/UseReducer";
// import App from "./hooks/UseMemo";
// import App from "./baseTest/index";

ReactDOM.render(
  <>
    <p>react知识点学习</p>
    <App />
  </>,
  document.getElementById("root")
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
// }, 1000);
