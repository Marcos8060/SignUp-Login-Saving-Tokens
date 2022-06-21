import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { AuthProvider } from "./context.js/AuthContext";
import Profile from "./components/Profile";
import Edit from "./components/Edit";
import Private from "./utils/Private";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <AuthProvider>
      <Routes>
          <Route element={ <Private /> }>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/edit/:id" element={<Edit />}></Route>
          </Route>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
