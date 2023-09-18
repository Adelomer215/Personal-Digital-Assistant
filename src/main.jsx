// import ReactDOM from "react-dom/client";
// ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>,
// )

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
