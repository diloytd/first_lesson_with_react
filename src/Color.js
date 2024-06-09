import React from 'react';
import {useState} from 'react'
import "./App.css";
import { BlockPicker } from "react-color";
import logo from "./logo.svg";


export function Color() {
  const [background, setBackground] = useState("#fff");
  const handleChangeComplete = (color, event) => {
    setBackground(color.hex);
  };
  return (
    <div className="App" style={{ backgroundColor: background }}>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, react!</p>
        <div>
          <BlockPicker
            color={background}
            onChangeComplete={handleChangeComplete}
          />
          ;
        </div>
     </header>
    </div>
  );
}