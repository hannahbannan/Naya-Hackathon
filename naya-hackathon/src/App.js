import React from 'react';
import './App.css';
import InspoBoard from "./Components/InspoBoard/InspoBoard";
import Basics from "./Components/Basics/Basics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Basics />
       <InspoBoard />
      </header>
    </div>
  );
}

export default App;
