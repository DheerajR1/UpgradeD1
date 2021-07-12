import React from "react"
import Btn from './button'
import "./index.css"

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Btn btnName = "Ball"/>
      <Btn btnName = "bat"/>
      <Btn btnName = "wicket"/>      
    </div>
  );
}

export default App;
