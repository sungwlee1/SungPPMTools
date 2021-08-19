import React, { Component } from "react";
import './App.css';
import Dashboard from './components/Dashboard';

//main entry point for our development - setup routes, additional logics, this is the meeting place for some of the major components for our application
function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
