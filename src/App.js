import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';
import JSXClass from './components/JSXClass';
import StateComponent from './components/StateComponent';
import SetState from './components/SetState';
import EventHandling from './components/EventHandling';
import EventHandlingInClassComponent from "./components/EventHandlingInClassComponent";
import ArrayMap from "./components/ArrayMap";
import FormControl from './components/FormControl';

function App() {
  return (
    <div className="App">
      <FormControl/>
      {/* <ArrayMap /> */}
      {/* <EventHandling /> */}
      {/* <EventHandlingInClassComponent /> */}
      {/* <SetState/> */}
      {/* <StateComponent/> */}
      {/* <FunctionComponent name="Peater" heroName="Spiderman">
        <p>Spiderman is a marvel hero.</p>
      </FunctionComponent>
      <FunctionComponent name="Brush" heroName="Batman">
        <button> Click here to be a Batman </button>
      </FunctionComponent>
      <FunctionComponent name="Tony" heroName="Ironman"/>
      <ClassComponent name="Peater" heroName="Spiderman" />
      <ClassComponent name="Brush" heroName="Batman" />
      <ClassComponent name="Tony" heroName="Ironman" /> */}
      {/* <JSXClass/> */}
    </div>
  );
}

export default App;
