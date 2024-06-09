import React from 'react';
import "./App.css";
import { MakePie } from './char.js';
import { Color } from './Color.js';
import {styled,  keyframes } from 'styled-components';
import { bounce } from 'react-animations';
//import './style.css';
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
function App() {
  return (
    <div>
  <Bounce><h1 style={{textAlign: ' center', color: '#e76fec'}}>Hello React</h1></Bounce>
  <Color></Color>
  <h2 style={{ textAlign: 'center' }}>My life</h2>
  <MakePie></MakePie>
  </div>
   );
}

export default App;
