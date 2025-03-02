import React from "react";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="logo-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </div>
      <header className="App-header"></header>
      <h1>Welcome to Lexicon App</h1>
    </div>
  );
}
