import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'; 
import LoginCard from "./components/LoginCard"

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <LoginCard />
      </header>
    </div>
  );
}

export default App;
