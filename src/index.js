import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/userContext";
import { RoleContextProvider } from "./context/roleContext";

ReactDOM.render(
  <React.StrictMode>
    <RoleContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </RoleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
