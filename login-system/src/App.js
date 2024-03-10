import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'; 
import LoginCard from "./components/LoginCard"
import BrowserRouter from "./BrowserRouter"

function App() {

  return (
    <div className="App">
      <div className='App-header'> 
          <BrowserRouter />
      </div>

    </div>
  );
}

export default App;
