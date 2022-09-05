import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import JSXClass from './components/JSXClass';

function App() {
  return (
    <div className="App">
      {/* <FunctionComponent />
      <ClassComponent /> */}
      <JSXClass/>
    </div>
  );
}

export default App;
