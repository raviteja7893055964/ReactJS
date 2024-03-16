// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDom from "react-dom/client";
import MyFun from "./App";
import "./index.css";
// function MyFun() {
//     return <h1> I am from index.js </h1>
// }
const root= ReactDom.createRoot(document.getElementById("root"));
setInterval(() => {
    root.render(
        <MyFun/>
        );
}, 1000);