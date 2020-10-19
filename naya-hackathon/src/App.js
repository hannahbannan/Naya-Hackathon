import React from "react";
import "./App.css";
import InspoBoard from "./Components/InspoBoard/InspoBoard";
import Basics from "./Components/Basics/Basics";

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <Basics />
        <InspoBoard />
      </body>
    </div>
  );
}

export default App;
