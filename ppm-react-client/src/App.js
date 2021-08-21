import React, { Component } from "react";
import './App.css';
import Dashboard from './components/Dashboard';
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";

//main entry point for our development - setup routes, additional logics, this is the meeting place for some of the major components for our application
function App() {
  return (
    <div className="App">
    <Header/>  
    <Dashboard/>
    </div>
  );
}

export default App;
